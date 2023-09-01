import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {
  RouteConfig,
  TabNavigationState,
  ParamListBase,
  StackNavigationState,
} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
} from '@react-navigation/native-stack';

export type ExtractBottomTaScreenNavigation<
  T extends ParamListBase,
  K = RouteConfig<
    T,
    keyof T,
    TabNavigationState<ParamListBase>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >,
> = K;

export type ExtractNativeStackScreenNavigation<
  T extends ParamListBase,
  K = RouteConfig<
    T,
    keyof T,
    StackNavigationState<T>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  >,
> = K;
