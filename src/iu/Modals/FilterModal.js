import React from 'react';
import { View, Text, Modal,TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';

const FilterModal = ({ modalVisible, setModalVisible }) => {
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
          <Text style={styles.text}>Filtrar Opciones</Text>
          <TouchableOpacity style={styles.button}  onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.text}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


export default FilterModal;
