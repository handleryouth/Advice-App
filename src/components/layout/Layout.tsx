import {StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {getColor} from '@src/utils';
import SafeAreaView from '../safeAreaView/SafeAreaView';

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor('darkBlue'),
    flex: 1,
  },
});
