import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import HelpComponent from '../Componets/HelpComponent';
import Toast from 'react-native-toast-message';

const HelpScreen = ({ navigation }) => {
  const [descripcion, setDescripcion] = useState('');

  const handleSendRequest = () => {
    Toast.show({
      type: 'success',
      text1: 'Solicitud enviada',
      text2: 'Tu solicitud fue enviada con éxito',
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.helpMainBackground}>
      <HelpComponent 
        navigation={navigation}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        handleSendRequest={handleSendRequest}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default HelpScreen;
