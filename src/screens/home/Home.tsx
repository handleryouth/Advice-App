import {
  Text,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {getColor, getFontFamily} from '@src/utils';
import {Card} from '@src/components';
import {requestData} from '@src/services';
import {DefaultAPIResponseProps} from '@src/types';
import {RefreshModal} from './components';

export default function Home() {
  const [advice, setAdvice] = useState<DefaultAPIResponseProps>();

  const [showRefeshModal, setShowRefeshModal] = useState(false);

  const [loading, setLoading] = useState(true);

  const getAdvice = useCallback(async () => {
    setLoading(true);
    requestData('advice', {
      onRequestFulfilled(value) {
        setAdvice(value);
      },
      onRequestRejected() {
        setShowRefeshModal(true);
      },
      onRequestFinally() {
        setLoading(false);
      },
    });
  }, []);

  const onModalRefreshPressed = useCallback(() => {
    setShowRefeshModal(false);
    getAdvice();
  }, [getAdvice]);

  useEffect(() => {
    getAdvice();
  }, [getAdvice]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={getAdvice}
          colors={[getColor('neonGreen')]}
          tintColor={getColor('neonGreen')}
        />
      }>
      <RefreshModal
        onModalRefreshPressed={onModalRefreshPressed}
        showRefeshModal={showRefeshModal}
      />
      <Card style={styles.card}>
        {loading ? (
          <ActivityIndicator size="large" color={getColor('neonGreen')} />
        ) : (
          <>
            <Text style={styles.title}>
              {advice?.slip ? `Advice #${advice?.slip.id}` : '-'}
            </Text>
            <Text style={styles.text}>
              {advice?.slip
                ? advice?.slip.advice
                : 'This is not an advice, try refresh'}
            </Text>
          </>
        )}
      </Card>
      <Text style={styles.hint}>Slide down for more advice</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    rowGap: 12,
  },
  title: {
    color: getColor('lightCyan'),
    fontSize: 14,
    textAlign: 'center',
  },
  text: {
    color: getColor('neonGreen'),
    fontSize: 28,
    textAlign: 'center',
    ...getFontFamily('extraBold'),
  },
  hint: {
    textAlign: 'center',
    marginTop: 10,
    color: getColor('neonGreen'),
  },
});
