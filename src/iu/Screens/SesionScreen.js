import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import SesionComponent from '../Componets/SesionComponent';
import Toast from 'react-native-toast-message';
import ForgotPasswordModal from '../Modals/ForgotPasswordModal';
import { useUser } from '../../Context/UserContext'; 

const SesionScreen = ({ navigation }) => { 
  const { login } = useUser(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateFields = () => {
    if (username.length > 10) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El usuario no puede exceder los 10 caracteres.',
        position: 'bottom',
      });
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'La contraseña debe tener 8 caracteres, incluir 1 mayúscula, 1 carácter especial y números.',
        position: 'bottom',
      });
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (validateFields()) {
      const success = login(username, password); 
      if (success) {
        Toast.show({
          type: 'success',
          text1: 'Inicio de sesión exitoso',
          text2: 'Has iniciado sesión correctamente',
          position: 'bottom',
        });
        setTimeout(() => {
          navigation.navigate('home'); 
        }, 500);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error de autenticación',
          text2: 'Usuario o contraseña incorrectos.',
          position: 'bottom',
        });
      }
    }
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
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
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
