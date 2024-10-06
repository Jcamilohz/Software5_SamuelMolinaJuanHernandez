import React from 'react';
import { View, Text, Modal, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';

const ProductDescriptionModal = ({ modalVisible, setModalVisible, product }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalBackgroundmfp}>
        <View style={styles.modalContainermfp}>
          <Text style={styles.modalTitlemfp}>Descripción</Text>
          <ScrollView>
            <Text style={styles.text}>{product?.description}</Text>
          </ScrollView>
          <Pressable style={styles.modalCloseButtonmfp} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseButtonTextmfp}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ProductDescriptionModal;
