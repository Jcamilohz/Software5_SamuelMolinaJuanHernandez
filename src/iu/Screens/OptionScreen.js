import React from 'react';
import { SafeAreaView, View, Text, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';
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
      <View style={styles.container3}>
        <View style={styles.opcions}>
          <ScrollView>
            {user && options.map((option, index) => (
              <Pressable
                key={index}
                style={styles.optionButton}
                onPress={() => navigation.navigate(option.route)}
              >
                <Text style={styles.textWhite}>{option.label}</Text>
              </Pressable>
            ))}

            <Pressable style={styles.optionButton} onPress={handleLogout}>
              <Text style={styles.textWhite}>
                {user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default OptionScreen;
