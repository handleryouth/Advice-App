import React from 'react';
import {ActivityIndicator} from 'react-native';
import {getColor} from '@src/utils';
import {LoadingIndicatorProps} from '@src/types';

export default function LoadingIndicator(props: LoadingIndicatorProps) {
  return (
    <ActivityIndicator {...props} size="large" color={getColor('neonGreen')} />
  );
}
