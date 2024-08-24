import React from 'react';
import { View, Text, Modal,Pressable } from 'react-native';
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
          <View style={styles.containerButton}>
           <Pressable style={styles.button}  onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.text}>Cerrar</Text>
           </Pressable>
          </View> 
        </View>
      </View>
    </Modal>
  );
};


export default FilterModal;
