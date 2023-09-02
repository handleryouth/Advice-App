import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';
import {getFontFamily} from '@src/utils';
import {TextProps} from '@src/types';

export default function Text({style, children, ...props}: TextProps) {
  return (
    <NativeText style={[styles.text, style]} {...props}>
      {children}
    </NativeText>
  );
}

const styles = StyleSheet.create({
  text: {
    ...getFontFamily('regular'),
  },
});
