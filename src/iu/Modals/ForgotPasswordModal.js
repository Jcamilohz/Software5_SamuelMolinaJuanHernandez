import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Pressable } from 'react-native';
import styles from '../../styles/styles';

const ForgotPasswordModal = ({ modalVisible, setModalVisible, onSendEmail }) => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    onSendEmail(email);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalBackgroundmfp}>
        <View style={styles.modalContainermfp}>
          <Text style={styles.modalTitlemfp}>Recuperar Contraseña</Text>
          
          <Text style={styles.modalDescriptionTextmfp}>Introduce tu correo electrónico</Text>
          
          <TextInput 
            style={styles.modalInputmfp} 
            placeholder="Correo electrónico"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Pressable style={styles.modalButtonmfp} onPress={handleSend}>
            <Text style={styles.modalButtonTextmfp}>Mandar</Text>
          </Pressable>

          <Pressable style={styles.modalCloseButtonmfp} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseButtonTextmfp}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ForgotPasswordModal;
