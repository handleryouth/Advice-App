import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SearchStackParamList} from '@src/types';
import {Card} from '@src/components';
import {getColor, getFontFamily} from '@src/utils';

export default function SearchDetail({
  route,
}: NativeStackScreenProps<SearchStackParamList>) {
  const {id, advice} =
    route.params as SearchStackParamList['SearchDetailScreen'];

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>Advice #{id}</Text>
        <Text style={styles.text}>{advice}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
});
