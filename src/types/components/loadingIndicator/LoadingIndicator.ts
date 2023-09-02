import {ComponentProps} from 'react';
import {ActivityIndicator} from 'react-native';

export type LoadingIndicatorProps = Omit<
  ComponentProps<typeof ActivityIndicator>,
  'color' | 'size'
>;
