import {ComponentProps} from 'react';
import {ListRenderItem, FlatList} from 'react-native';

export interface FlatListProps<T extends any>
  extends ComponentProps<typeof FlatList<T>> {
  isLoading?: boolean;
  renderItem: ListRenderItem<T>;
}
