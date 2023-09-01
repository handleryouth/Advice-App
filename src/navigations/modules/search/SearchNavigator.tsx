import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ExtractNativeStackScreenNavigation,
  SearchStackParamList,
} from '@src/types';
import {Search, SearchDetail} from '@src/screens';
import {NAVIGATION_OPTIONS, SCREEN_OPTIONS} from '@src/const';
import {generateShowHeaderScreenTitle} from '@src/utils/screen';

export const SearchStack = createNativeStackNavigator<SearchStackParamList>();

export const SEARCH_NAVIGATOR_SCREENS: ExtractNativeStackScreenNavigation<SearchStackParamList>[] =
  [
    {
      name: 'SearchScreen',
      component: Search,
      options: SCREEN_OPTIONS,
    },
    {
      name: 'SearchDetailScreen',
      component: SearchDetail,
      options: generateShowHeaderScreenTitle('Advice'),
    },
  ];

export default function SearchNavigator() {
  return (
    <SearchStack.Navigator screenOptions={NAVIGATION_OPTIONS}>
      {SEARCH_NAVIGATOR_SCREENS.map(route => (
        <SearchStack.Screen key={route.name} {...route} />
      ))}
    </SearchStack.Navigator>
  );
}
