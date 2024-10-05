import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';

const OptionComponent = ({ navigation }) => {
  return (
    <View style={styles.container6}>
      <View style={styles.opcions}>
        <ScrollView>
          <Pressable style={styles.optionButton} onPress={() => navigation.navigate('profile')}>
            <Text style={styles.optionButtonText}>Editar Perfil</Text>
          </Pressable>
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
          <Pressable style={styles.optionButton} onPress={() => navigation.navigate('sesion')}>
            <Text style={styles.optionButtonText}>Cerrar Sesión</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default OptionComponent;
