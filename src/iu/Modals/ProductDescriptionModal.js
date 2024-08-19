import React from 'react';
import { SafeAreaView, View, Text,Modal } from 'react-native';
import styles from '../../styles/styles';


const ProductDescriptionModal = ({ modalVisible, setModalVisible }) => {
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
            <Text style={styles.text}>Descripción del producto</Text>
          </View>
        </View>
      </Modal>
    );
  };

export default ProductDescriptionModal;