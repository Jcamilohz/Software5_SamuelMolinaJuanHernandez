import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import RegisterComponent from '../Componets/RegisterComponet';
import Toast from 'react-native-toast-message';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };


  const validateFields = () => {

    if (username.length > 10) {
      Toast.show({ type: 'error', 
        text1: 'Error', 
        text2: 'El usuario no puede exceder los 10 caracteres.',
        position: 'bottom',});
      return false;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      Toast.show({ 
        type: 'error', 
        text1: 'Error', 
        text2: 'La contraseña debe incluir 1 mayúscula, 1 carácter especial y tener 8 caracteres.',
        position: 'bottom', 
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({ type: 'error',
         text1: 'Error',
         text2: 'El correo electrónico no es válido.' ,
         position: 'bottom',});
      return false;
    }

    try {
      const birthDateObj = parseDate(birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDateObj.getFullYear();
      if (age < 18 || age > 50) {
        Toast.show({ 
          type: 'error', 
          text1: 'Error', 
          text2: 'Debes tener entre 18 y 50 años para registrarte.' ,
          position: 'bottom',
        });
        return false;
      }
    } catch (error) {
      Toast.show({ type: 'error', 
        text1: 'Error',
        text2: 'Formato de fecha incorrecto. Usa DD/MM/AAAA.',
         position: 'bottom', });
      return false;
    }

    if (address.length > 30) {
      Toast.show({ type: 'error',
         text1: 'Error',
          text2: 'La dirección no puede exceder los 30 caracteres.',
          position: 'bottom', });
      return false;
    }

   
    if (location.toLowerCase() !== 'colombia') {
      Toast.show({ type: 'error',
         text1: 'Error', 
         text2: 'Solo se permite registrar desde Colombia.',
         position: 'bottom',
       });
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (validateFields()) {
      Toast.show({
        type: 'success',
        text1: 'Registro exitoso',
        text2: 'Tu cuenta ha sido creada correctamente',
        position: 'bottom',
      });

      setTimeout(() => {
        navigation.navigate('sesion');
      }, 500); 
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.registerScrollView}>
      <SafeAreaView style={styles.registerMainBackground}>
        <RegisterComponent
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          address={address}
          setAddress={setAddress}
          location={location}
          setLocation={setLocation}
          handleRegister={handleRegister}
        />
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};

export default RegisterScreen;
