import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getColor} from '@src/utils';
import {Button, Text} from '@src/components';

export interface RefreshModalProps {
  showRefeshModal: boolean;
  onModalRefreshPressed: () => void;
}

export default function RefreshModal({
  onModalRefreshPressed,
  showRefeshModal,
}: RefreshModalProps) {
  return (
    <Modal visible={showRefeshModal}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>
          Looks like there is no internet connection, try to refresh.
        </Text>
        <Button style={styles.modalButton} onPress={onModalRefreshPressed}>
          <Icon name="refresh" size={20} style={styles.modalButtonContent} />
          <Text style={styles.modalButtonContent}>Refresh</Text>
        </Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  modalButtonContent: {
    color: getColor('lightCyan'),
  },
  modalText: {
    textAlign: 'center',
  },
  modalContent: {
    rowGap: 20,
  },
});
