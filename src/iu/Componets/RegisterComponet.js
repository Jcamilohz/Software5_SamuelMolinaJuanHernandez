import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';

const RegisterComponent = ({
  username, setUsername,
  password, setPassword,
  email, setEmail,
  birthDate, setBirthDate,
  address, setAddress,
  location, setLocation,
  handleRegister
}) => {
  return (
    <>
      <View style={styles.registerLogoContainer}>
        <Image source={require('../../Iconos/IconoCompraYa2SinFondo.png')} style={styles.registerLogo} />
      </View>

      <Text style={styles.registerInstructionText}>Registrarse</Text>

      <View style={styles.registerInputWrapper}>
        <Text style={styles.registerLabel}>Usuario</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Usuario (máx 10 caracteres)"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={username}
          onChangeText={setUsername}
          maxLength={10}
        />

        <Text style={styles.registerLabel}>Contraseña</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Contraseña (Mayúscula, Especial, 8 caracteres)"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          maxLength={8}
          keyboardType="default" 
          autoCapitalize="none" 
        />

        <Text style={styles.registerLabel}>Correo</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Correo"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.registerLabel}>Fecha de Nacimiento (DD/MM/AAAA)</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Fecha de Nacimiento"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={birthDate}
          onChangeText={setBirthDate}
        />

        <Text style={styles.registerLabel}>Dirección</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Dirección (máx 30 caracteres)"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={address}
          onChangeText={setAddress}
          maxLength={30}
        />

        <Text style={styles.registerLabel}>País, Departamento, Ciudad</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Colombia, Depto, Ciudad"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </Pressable>
    </>
  );
};

export default RegisterComponent;
