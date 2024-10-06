import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import RegisterComponent from '../Componets/RegisterComponet';
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
        <RegisterComponent
          name={name}
          setName={setName}
          lastName={lastName}  
          setLastName={setLastName}  
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          address={address}
          setAddress={setAddress}
          country={country}
          setCountry={handleCountryChange}
          department={department}
          setDepartment={handleDepartmentChange}
          city={city}
          setCity={setCity}
          filteredDepartments={filteredDepartments}
          filteredCities={filteredCities}
          handleRegister={handleRegister}
        />
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};

export default RegisterScreen;
