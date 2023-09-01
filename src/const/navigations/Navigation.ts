import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {getColor} from '@src/utils';

export const NAVIGATION_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  statusBarStyle: 'light',
  statusBarColor: 'black',
  contentStyle: {
    backgroundColor: 'transparent',
  },
  headerStyle: {
    backgroundColor: getColor('darkGrayishBlue'),
  },
  headerTintColor: getColor('lightCyan'),
};

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  contentStyle: {
    backgroundColor: 'transparent',
  },
};

export const SHOW_HEADER_OPTIONS: NativeStackNavigationOptions = {
  ...SCREEN_OPTIONS,
  headerShown: true,
};

export const TAB_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: getColor('lightCyan'),
  tabBarStyle: {
    backgroundColor: getColor('grayishBlue'),
  },
};
