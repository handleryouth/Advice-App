import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SafeAreaViewProps} from '@src/types';

export default function SafeAreaView({children, style}: SafeAreaViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
        style,
      ]}>
      {children}
    </View>
  );
}
