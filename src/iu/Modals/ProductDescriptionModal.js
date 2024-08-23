import React from 'react';
import { View, Text, Modal } from 'react-native';
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
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.text}>descripcion del producto</Text>
          {product?.description &&
            Object.keys(product.description).map((key) => (
              <Text key={key} style={styles.text}>
                {key}: {product.description[key]}
              </Text>
            ))}
        </View>
      </View>
    </Modal>
  );
};

export default ProductDescriptionModal;
