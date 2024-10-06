import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import { useUser } from '../../Context/UserContext';
import Toast from 'react-native-toast-message';

const OptionComponent = ({ navigation }) => {
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
      navigation.navigate('sesion');
    } else {
      navigation.navigate('sesion');
    }
  };

  return (
    <View style={styles.container6}>
      <View style={styles.opcions}>
        <ScrollView>
          {}
          {user && (
            <Pressable style={styles.optionButton} onPress={() => navigation.navigate('profile')}>
              <Text style={styles.optionButtonText}>Editar Perfil</Text>
            </Pressable>
          )}
          <Pressable style={styles.optionButton} onPress={() => navigation.navigate('myBuys')}>
            <Text style={styles.optionButtonText}>Mis Compras</Text>
          </Pressable>
          <Pressable style={styles.optionButton} onPress={() => navigation.navigate('myProduct')}>
            <Text style={styles.optionButtonText}>Mis Productos</Text>
          </Pressable>
          <Pressable style={styles.optionButton} onPress={() => navigation.navigate('productSell')}>
            <Text style={styles.optionButtonText}>Vender Productos</Text>
          </Pressable>
          <Pressable style={styles.optionButton} onPress={() => navigation.navigate('help')}>
            <Text style={styles.optionButtonText}>Ayuda</Text>
          </Pressable>
          <Pressable style={styles.optionButton} onPress={handleLogout}>
            <Text style={styles.optionButtonText}>{user ? 'Cerrar Sesión' : 'Iniciar Sesión'}</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default OptionComponent;
