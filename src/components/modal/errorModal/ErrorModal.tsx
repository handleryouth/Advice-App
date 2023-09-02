import React from 'react';
import {StyleSheet} from 'react-native';
import {ErrorModalProps} from '@src/types';
import BaseModal from '../baseModal/BaseModal';
import Text from '../../text/Text';
import Button from '../../button/Button';

export default function ErrorModal({
  toggleCloseModal,
  visible,
}: ErrorModalProps) {
  return (
    <BaseModal visible={visible}>
      <Text style={styles.modalText}>
        Looks like there is an error, try again later.
      </Text>

      <Button onPress={toggleCloseModal}>
        <Text>Close</Text>
      </Button>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  modalText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
  },
});
