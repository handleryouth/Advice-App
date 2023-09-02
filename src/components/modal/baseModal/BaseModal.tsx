import React from 'react';
import {Modal as NativeModal, StyleSheet, View} from 'react-native';
import {BaseModalProps} from '@src/types';

export default function BaseModal({
  visible,
  animationType = 'slide',
  transparent = true,
  children,
  ...props
}: BaseModalProps) {
  return (
    <NativeModal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
      {...props}>
      <View style={styles.viewContainer}>
        <View style={styles.viewInnerContainer}>{children}</View>
      </View>
    </NativeModal>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewInnerContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
});
