import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExtractBottomTaScreenNavigation, RootStackParamList} from '@src/types';
import {StyleSheet} from 'react-native';
import {TAB_OPTIONS} from '@src/const';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeNavigator, SearchNavigator} from '../modules';

export const Tab = createBottomTabNavigator<RootStackParamList>();

export const TAB_NAVIGATOR: ExtractBottomTaScreenNavigation<RootStackParamList>[] =
  [
    {
      name: 'Home',
      component: HomeNavigator,
      options: {
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      },
    },
    {
      name: 'Search',
      component: SearchNavigator,
      options: {
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="search" color={color} size={size} />
        ),
      },
    },
  ];

export default function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.tabScreen}
      screenOptions={TAB_OPTIONS}
      initialRouteName="Home">
      {TAB_NAVIGATOR.map((route, index) => (
        <Tab.Screen key={index} {...route} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabScreen: {
    backgroundColor: 'transparent',
  },
});
