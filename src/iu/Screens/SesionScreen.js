import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import SesionComponent from '../Componets/SesionComponent';
import Toast from 'react-native-toast-message';
import ForgotPasswordModal from '../Modals/ForgotPasswordModal';

const SesionScreen = ({ navigation }) => { 
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    Toast.show({
      type: 'success',
      text1: 'Inicio de sesión exitoso',
      text2: 'Has iniciado sesión correctamente',
      position: 'bottom',
    });
    
   
    setTimeout(() => {
      navigation.navigate('home');
    }, 500); 
  };

  const handleRegister = () => {
    navigation.navigate('register');
  };

  const handleForgotPassword = () => {
    setModalVisible(true);
  };

  const handleSendEmail = (email) => {
    setModalVisible(false);
    Toast.show({
      type: 'success',
      text1: 'Correo enviado',
      text2: `Se ha enviado un correo de recuperación a ${email}`,
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.sesionMainBackground}>
      <SesionComponent 
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onRegister={handleRegister}
      />
      
      <ForgotPasswordModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
        onSendEmail={handleSendEmail}
      />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default SesionScreen;
