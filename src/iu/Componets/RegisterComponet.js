import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/styles';

const RegisterComponent = ({
  name, setName,
  lastName, setLastName,  
  username, setUsername,
  password, setPassword,
  email, setEmail,
  birthDate, setBirthDate,
  address, setAddress,
  country, setCountry,
  department, setDepartment,
  city, setCity,
  filteredDepartments,
  filteredCities,
  handleRegister
}) => {
  return (
    <>
      <View style={styles.registerLogoContainer}>
        <Image source={require('../../Iconos/IconoCompraYa2SinFondo.png')} style={styles.registerLogo} />
      </View>

      <Text style={styles.registerInstructionText}>Registrarse</Text>

      <View style={styles.registerInputWrapper}>
    
        <Text style={styles.registerLabel}>Nombre</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Nombre"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={name}
          onChangeText={setName}
        />

  
        <Text style={styles.registerLabel}>Apellido</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="Apellido"
          placeholderTextColor={styles.headerTextInputPlaceholder}
          value={lastName}
          onChangeText={setLastName}
        />

 
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
        />


        <Text style={styles.registerLabel}>País</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={country}
            onValueChange={setCountry}
            style={styles.picker1}
          >
            <Picker.Item label="Seleccione un país" value="" />
            <Picker.Item label="Colombia" value="1" />
          </Picker>
        </View>


        <Text style={styles.registerLabel}>Departamento</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={department}
            onValueChange={setDepartment}
            enabled={filteredDepartments.length > 0}
            style={styles.picker1}
          >
            <Picker.Item label="Seleccione un departamento" value="" />
            {filteredDepartments.map(dept => (
              <Picker.Item key={dept.id} label={dept.name} value={dept.id.toString()} />
            ))}
          </Picker>
        </View>

     
        <Text style={styles.registerLabel}>Ciudad</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={city}
            onValueChange={setCity}
            enabled={filteredCities.length > 0}
            style={styles.picker1}
          >
            <Picker.Item label="Seleccione una ciudad" value="" />
            {filteredCities.map(city => (
              <Picker.Item key={city.id} label={city.name} value={city.id.toString()} />
            ))}
          </Picker>
        </View>

        <Pressable style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </Pressable>
      </View>
    </>
  );
};

export default RegisterComponent;
