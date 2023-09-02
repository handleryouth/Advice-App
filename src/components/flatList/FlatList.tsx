import React from 'react';
import {FlatList as NativeFlatList} from 'react-native';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';
import {FlatListProps} from '@src/types';

export default function FlatList<T extends any>({
  isLoading,
  data,
  ListEmptyComponent,
  ...props
}: FlatListProps<T>) {
  return (
    <NativeFlatList
      {...props}
      data={isLoading ? [] : data}
      ListEmptyComponent={isLoading ? <LoadingIndicator /> : ListEmptyComponent}
    />
  );
}
