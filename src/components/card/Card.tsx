import {View, StyleSheet} from 'react-native';
import React from 'react';
import {getColor} from '@src/utils';
import {CardProps} from '@src/types';

export default function Card({children, style, ...props}: CardProps) {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor('darkGrayishBlue'),
    borderRadius: 10,
    padding: 20,
  },
});
