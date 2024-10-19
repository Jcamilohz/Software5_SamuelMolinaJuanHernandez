import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';
import { useUser } from '../../Context/UserContext'; 
import { countryData, departmentData, cityData } from '../../data/NationalityData';  

const RegisterScreen = ({ navigation }) => {
  const { registerUser } = useUser(); 
  const [name, setName] = useState(''); 
  const [lastName, setLastName] = useState('');  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    const departments = departmentData.filter(dept => dept.countryId === parseInt(selectedCountry));
    setFilteredDepartments(departments);
    setDepartment('');  
    setCity('');  
    setFilteredCities([]);  
  };

  const handleDepartmentChange = (selectedDepartment) => {
    setDepartment(selectedDepartment);
    const cities = cityData.filter(city => city.departmentId === parseInt(selectedDepartment));
    setFilteredCities(cities);
    setCity('');  
  };

  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
  };

  const validateFields = () => {
    if (name.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El campo de nombre es obligatorio.',
        position: 'bottom',
      });
      return false;
    }

    if (lastName.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El campo de apellido es obligatorio.',
        position: 'bottom',
      });
      return false;
    }

    if (username.length > 10) {
      Toast.show({
        type: 'error', 
        text1: 'Error', 
        text2: 'El usuario no puede exceder los 10 caracteres.',
        position: 'bottom',
      });
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
      Toast.show({
        type: 'error', 
        text1: 'Error', 
        text2: 'El correo electrónico no es válido.',
        position: 'bottom',
      });
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
          text2: 'Debes tener entre 18 y 50 años para registrarte.',
          position: 'bottom',
        });
        return false;
      }
    } catch (error) {
      Toast.show({
        type: 'error', 
        text1: 'Error',
        text2: 'Formato de fecha incorrecto. Usa DD/MM/AAAA.',
        position: 'bottom',
      });
      return false;
    }

    if (address.length > 30) {
      Toast.show({
        type: 'error', 
        text1: 'Error', 
        text2: 'La dirección no puede exceder los 30 caracteres.',
        position: 'bottom',
      });
      return false;
    }

    if (!country) {
      Toast.show({
        type: 'error', 
        text1: 'Error', 
        text2: 'Debes seleccionar un país.',
        position: 'bottom',
      });
      return false;
    }

    if (!department) {
      Toast.show({
        type: 'error', 
        text1: 'Error', 
        text2: 'Debes seleccionar un departamento.',
        position: 'bottom',
      });
      return false;
    }

    if (!city) {
      Toast.show({
        type: 'error', 
        text1: 'Error', 
        text2: 'Debes seleccionar una ciudad.',
        position: 'bottom',
      });
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (validateFields()) {
      const newUser = {
        name,
        lastName, 
        userName: username,
        password,
        mail: email,
        birthDate,
        address,
        country,
        departament: department,
        city,
      };

      registerUser(newUser);
      Toast.show({
        type: 'success',
        text1: 'Registro exitoso',
        text2: 'Tu cuenta ha sido creada correctamente',
        position: 'bottom',
      });

      setTimeout(() => {
        navigation.navigate('home'); 
      }, 500);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.registerScrollView}>
      <SafeAreaView style={styles.registerMainBackground}>
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
              onValueChange={handleCountryChange}
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
              onValueChange={handleDepartmentChange}
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
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};

export default RegisterScreen;
