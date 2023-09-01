import React, {ComponentProps} from 'react';
import {ActivityIndicator} from 'react-native';
import {getColor} from '@src/utils';

export type LoadingIndicatorProps = Omit<
  ComponentProps<typeof ActivityIndicator>,
  'color' | 'size'
>;

export default function LoadingIndicator(props: LoadingIndicatorProps) {
  return (
    <ActivityIndicator {...props} size="large" color={getColor('neonGreen')} />
  );
}
