import {ButtonProps} from '@src/types';
import {getColor} from '@src/utils';
import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';

export default function Button({children, style, ...props}: ButtonProps) {
  return (
    <Pressable style={[styles.container, style as ViewStyle]} {...props}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor('grayishBlue'),
    padding: 15,
    borderRadius: 8,
    width: 'auto',
    alignItems: 'center',
  },
});
