import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';

const SesionComponent = ({ onLogin, onForgotPassword, onRegister, username, setUsername, password, setPassword }) => {
  return (
    <>
      <View style={styles.sesionLogoContainer}>
        <Image source={require('../../Iconos/IconoCompraYa2SinFondo.png')} style={styles.sesionLogo} />
      </View>

      <Text style={styles.sesionInstructionText}>Iniciar sesión</Text>

      <View style={styles.sesionInputWrapper}>
        <Text style={styles.sesionLabel}>Usuario</Text>
        <TextInput
          style={styles.sesionInput}
          placeholder="Usuario (máx 10 caracteres)"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          maxLength={10}
          keyboardType="default"
          autoCapitalize="none"
        />

        <Text style={styles.sesionLabel}>Contraseña</Text>
        <TextInput
          style={styles.sesionInput}
          placeholder="Contraseña (Mayúscula, Especial, 8 caracteres)"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          maxLength={8}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>

      <Pressable style={styles.sesionButton} onPress={onLogin}>
        <Text style={styles.sesionButtonText}>Iniciar sesión</Text>
      </Pressable>

      <Pressable onPress={onForgotPassword}>
        <Text style={styles.sesionTextLink}>¿Olvidó su contraseña?</Text>
      </Pressable>

      <Pressable onPress={onRegister}>
        <Text style={styles.sesionTextLink}>¿No tiene cuenta? Regístrese acá</Text>
      </Pressable>
    </>
  );
};

export default SesionComponent;
