import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@src/screens';
import {NAVIGATION_OPTIONS, SCREEN_OPTIONS} from '@src/const';
import {HomeStackParamList} from '@src/types';

export const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={NAVIGATION_OPTIONS}>
      <HomeStack.Screen
        options={SCREEN_OPTIONS}
        name="HomeScreen"
        component={Home}
      />
    </HomeStack.Navigator>
  );
}
