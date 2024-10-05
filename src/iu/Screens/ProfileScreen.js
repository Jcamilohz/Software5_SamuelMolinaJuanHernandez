import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProfileComponent from '../Componets/ProfileComponent';
import personData from '../../data/PersonData';
import Toast from 'react-native-toast-message';

const ProfileScreen = () => {
  const person = personData.find(p => p.id === 1);

  const handleUpdate = () => {
    Toast.show({
      type: 'success',
      text1: 'Actualización exitosa',
      text2: 'La información del perfil ha sido actualizada correctamente.',
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.profileMainBackground}>
      <ScrollView contentContainerStyle={styles.profileScrollView}>
        <ProfileComponent person={person} onUpdate={handleUpdate} />
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
