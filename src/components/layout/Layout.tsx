import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {getColor} from '@src/utils';
import {LayoutProps} from '@src/types';
import SafeAreaView from '../safeAreaView/SafeAreaView';

const Layout = ({children}: LayoutProps) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor('darkBlue'),
    flex: 1,
  },
});
