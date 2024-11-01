import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';
import { useUser } from '../../Context/UserContext';
import { countryData, departmentData, cityData } from '../../data/NationalityData';
import firebase from '../../firebase/firebase';

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
  const [imageUri, setImageUri] = useState(null);
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

  const uploadImageToStorage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileName = `profile_images/${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const storageRef = firebase.storage.ref().child(fileName);
    await storageRef.put(blob);
    return await storageRef.getDownloadURL();
  };

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 1 }, (response) => {
      if (response.didCancel) {
        Toast.show({
          type: 'info',
          text1: 'Selección cancelada',
          text2: 'No se ha seleccionado ninguna imagen.',
          position: 'bottom',
        });
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const validateFields = () => {
    if (!name || !lastName) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Nombre y apellido son obligatorios.', position: 'bottom'
      });
      return false;
    }

    if (username.length > 10) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El usuario no debe exceder 10 caracteres.', position: 'bottom'
      });
      return false;
    }

    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Contraseña debe incluir mayúsculas, un carácter especial y ser de 8 caracteres.', position: 'bottom'
      });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Correo electrónico no es válido.', position: 'bottom'
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
          text1: 'Error', text2:
            'Edad permitida: 18 a 50 años.', position: 'bottom'
        });
        return false;
      }
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Formato de fecha incorrecto. Usa DD/MM/AAAA.', position: 'bottom'
      });
      return false;
    }

    if (address.length > 30) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'La dirección no puede exceder 30 caracteres.', position: 'bottom'
      });
      return false;
    }

    if (!country || !department || !city) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Selecciona país, departamento y ciudad.', position: 'bottom'
      });
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateFields()) return;

    try {
      const imageUrl = imageUri ? await uploadImageToStorage(imageUri) : null;

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
        imageProfile: imageUrl,
      };

      await registerUser(newUser);
      Toast.show({
        type: 'success',
        text1: 'Registro exitoso',
        text2: 'Cuenta creada correctamente.', position: 'bottom'
      });
      setTimeout(() => navigation.navigate('home'), 500);
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo completar el registro. Intenta de nuevo.', position: 'bottom'
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <SafeAreaView style={styles.registerMainBackground}>
        <View style={styles.registerLogoContainer}>
          <Image source={require('../../Iconos/IconoCompraYa2SinFondo.png')} style={styles.registerLogo} />
        </View>

        <Text style={styles.registerInstructionText}>Registrarse</Text>

        <View style={styles.registerInputWrapper}>
          <Text style={styles.registerLabel}>Nombre</Text>
          <TextInput style={styles.registerInput} placeholder="Nombre" value={name} onChangeText={setName} />

          <Text style={styles.registerLabel}>Apellido</Text>
          <TextInput style={styles.registerInput} placeholder="Apellido" value={lastName} onChangeText={setLastName} />
   
          <Text style={styles.registerLabel}>Usuario</Text>
          <TextInput style={styles.registerInput} placeholder="Usuario (máx 10 caracteres)" value={username} onChangeText={setUsername} maxLength={10} />

          <Text style={styles.registerLabel}>Contraseña</Text>
          <TextInput style={styles.registerInput} placeholder="Contraseña (Mayúscula, Especial, 8 caracteres)" value={password} onChangeText={setPassword} secureTextEntry maxLength={8} />

          <Text style={styles.registerLabel}>Correo</Text>
          <TextInput style={styles.registerInput} placeholder="Correo" value={email} onChangeText={setEmail} keyboardType="email-address" />

          <Text style={styles.registerLabel}>Fecha de Nacimiento (DD/MM/AAAA)</Text>
          <TextInput style={styles.registerInput} placeholder="Fecha de Nacimiento" value={birthDate} onChangeText={setBirthDate} />

          <Text style={styles.registerLabel}>Dirección</Text>
          <TextInput style={styles.registerInput} placeholder="Dirección (máx 30 caracteres)" value={address} onChangeText={setAddress} />

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

          <Pressable style={styles.actionButton1} onPress={handleSelectImage}>
            <Text style={styles.buttonText1}>Seleccionar Imagen de Perfil</Text>
          </Pressable>

          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />}

          <Pressable style={styles.actionButton1} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registrarse</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RegisterScreen;
