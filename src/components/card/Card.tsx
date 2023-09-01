import {View, StyleSheet} from 'react-native';
import React, {ComponentProps} from 'react';
import {getColor} from '@src/utils';

export type CardProps = ComponentProps<typeof View>;

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
