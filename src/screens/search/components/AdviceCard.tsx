import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Card, Text} from '@src/components';
import {getColor, getFontFamily} from '@src/utils';

export interface AdviceCardProps {
  advice: string;
  onPress: () => void;
}

export default function AdviceCard({advice, onPress}: AdviceCardProps) {
  return (
    <Pressable onPress={onPress}>
      <Card>
        <Text style={styles.text}>{advice}</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: getColor('neonGreen'),
    fontSize: 16,
    ...getFontFamily('extraBold'),
  },
});
