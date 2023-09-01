import React from 'react';
import BaseModal from '../baseModal/BaseModal';
import {StyleSheet} from 'react-native';
import Text from '../../text/Text';
import Button from '../../button/Button';

export interface ErrorModalProps {
  toggleCloseModal: () => void;
  visible: boolean;
}

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
