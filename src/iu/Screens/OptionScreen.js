import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import OptionComponent from '../Componets/OptionComponent';
import { useUser } from '../../Context/UserContext';
import Toast from 'react-native-toast-message';

const OptionScreen = ({ navigation }) => {
  const { user, logout } = useUser();

  const handleLogout = () => {
    if (user) {
      logout();
      Toast.show({
        type: 'success',
        text1: 'Cierre de sesión',
        text2: 'Has cerrado sesión correctamente.',
        position: 'bottom',
      });
      setTimeout(() => {
        navigation.navigate('sesion'); 
      }, 1500);
      
    } else {
      navigation.navigate('sesion');
    }
  };

  const options = [
    { label: 'Editar Perfil', route: 'profile' },
    { label: 'Mis Compras', route: 'myBuys' },
    { label: 'Mis Productos', route: 'myProduct' },
    { label: 'Vender Productos', route: 'productSell' },
    { label: 'Ayuda', route: 'help' },
  ];

  return (
    <SafeAreaView style={styles.mainBackground}>
      <OptionComponent 
        navigation={navigation} 
        user={user} 
        handleLogout={handleLogout} 
        options={options} 
      />
    </SafeAreaView>
  );
};

export default OptionScreen;
