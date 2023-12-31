import {TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {getColor, getFontFamily} from '@src/utils';
import {InputProps} from '@src/types';

export default function Input({
  style,
  autoCorrect = false,
  placeholderTextColor = getColor('darkGrayishBlue'),
  ...props
}: InputProps) {
  return (
    <TextInput
      {...props}
      autoCorrect={autoCorrect}
      placeholderTextColor={placeholderTextColor}
      style={[styles.input, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    ...getFontFamily('regular'),
    borderColor: getColor('grayishBlue'),
    borderWidth: 2,
    color: 'white',
    backgroundColor: getColor('darkBlue'),
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 16,
    height: 50,
  },
});
