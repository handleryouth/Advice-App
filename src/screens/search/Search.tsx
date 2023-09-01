import React, {useCallback, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ErrorModal, FlatList, Input, Text} from '@src/components';
import {requestData} from '@src/services';
import {SearchSlipProps, SearchStackParamList} from '@src/types';
import {getColor} from '@src/utils';
import {AdviceCard} from './components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export default function Search({
  navigation,
}: NativeStackScreenProps<SearchStackParamList>) {
  const [advices, setAdvices] = useState<SearchSlipProps[]>();
  const [loading, setLoading] = useState(false);

  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSearchAdvice = useCallback((text: string) => {
    setLoading(true);
    requestData('searchAdvice', {
      url: `/search/${text}`,
      onRequestFulfilled(value) {
        if (value.slips) {
          setAdvices(value.slips);
        } else {
          setAdvices([]);
        }
      },
      onRequestRejected() {
        setShowErrorModal(true);
      },
      onRequestFinally() {
        setLoading(false);
      },
    });
  }, []);

  const handleRenderSeparatorComponent = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <View style={styles.container}>
      <ErrorModal
        visible={showErrorModal}
        toggleCloseModal={() => setShowErrorModal(false)}
      />
      <FlatList
        ListHeaderComponent={
          <Input
            onSubmitEditing={e => handleSearchAdvice(e.nativeEvent.text)}
            placeholder="Search advice"
          />
        }
        ListHeaderComponentStyle={styles.input}
        style={styles.flatlist}
        data={advices}
        renderItem={({item}) => (
          <AdviceCard
            onPress={() => navigation.navigate('SearchDetailScreen', item)}
            advice={item.advice}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            {advices === undefined
              ? 'Your search shown here!'
              : 'No advices. try another keyword!'}
          </Text>
        }
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={handleRenderSeparatorComponent}
        isLoading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    marginBottom: 20,
  },
  separator: {
    marginVertical: 5,
  },
  flatlist: {
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    color: getColor('neonGreen'),
  },
});
