import React from 'react';
import { SafeAreaView, View, Text,Modal } from 'react-native';
import styles from '../../styles/styles';


const CommentModal = ({ modalVisible, setModalVisible }) => {
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
            <Text style={styles.text}>cOMENTARIOS</Text>
          </View>
        </View>
      </Modal>
    );
  };

export default CommentModal;