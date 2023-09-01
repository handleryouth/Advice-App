import React, {ComponentProps} from 'react';
import {ListRenderItem, FlatList as NativeFlatList} from 'react-native';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';

export interface FlatListProps<T extends any>
  extends ComponentProps<typeof NativeFlatList<T>> {
  isLoading?: boolean;
  renderItem: ListRenderItem<T>;
}

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
