import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useUser } from '../../Context/UserContext';
import { countryData, departmentData, cityData } from '../../data/NationalityData'; 
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';
import ProfileViewComponent from '../Componets/ProfileViewComponent';
import ProfileEditComponent from '../Componets/ProfileEditComponent';

const ProfileScreen = () => {
  const { user, updateUser } = useUser(); 
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user?.name || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [userName, setUserName] = useState(user?.userName || '');
  const [mail, setMail] = useState(user?.mail || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');
  const [address, setAddress] = useState(user?.address || '');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setLastName(user.lastName);
      setUserName(user.userName);
      setMail(user.mail);
      setBirthDate(user.birthDate);
      setAddress(user.address);

      const selectedCountry = countryData.find(c => c.name === user.country);
      if (selectedCountry) {
        handleCountryChange(selectedCountry.id.toString());
      }

      const selectedDepartment = departmentData.find(d => d.name === user.departament);
      if (selectedDepartment) {
        handleDepartmentChange(selectedDepartment.id.toString());
      }

      const selectedCity = cityData.find(c => c.name === user.city);
      if (selectedCity) {
        setCity(selectedCity.id.toString());
      }
    }
  }, [user]);

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

    if (userName.length > 10) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El usuario no puede exceder los 10 caracteres.',
        position: 'bottom',
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El correo electrónico no es válido.',
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

  const handleSave = () => {
    if (validateFields()) {
      const selectedCountryName = countryData.find(c => c.id === parseInt(country))?.name;
      const selectedDepartmentName = departmentData.find(d => d.id === parseInt(department))?.name;
      const selectedCityName = cityData.find(c => c.id === parseInt(city))?.name;

      updateUser({ 
        name, 
        lastName, 
        userName, 
        mail, 
        birthDate, 
        address, 
        country: selectedCountryName, 
        departament: selectedDepartmentName, 
        city: selectedCityName 
      });
      setIsEditing(false);
      Toast.show({
        type: 'success',
        text1: 'Actualización exitosa',
        text2: 'La información del perfil ha sido actualizada correctamente.',
        position: 'bottom',
      });
    }
  };

  return (
    <SafeAreaView style={styles.profileMainBackgroundPf}>
      <ScrollView>
        {isEditing ? (
          <ProfileEditComponent
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            userName={userName}
            setUserName={setUserName}
            mail={mail}
            setMail={setMail}
            birthDate={birthDate}
            setBirthDate={setBirthDate}
            address={address}
            setAddress={setAddress}
            country={country}
            handleCountryChange={handleCountryChange}
            department={department}
            handleDepartmentChange={handleDepartmentChange}
            city={city}
            setCity={setCity}
            filteredCountries={countryData}
            filteredDepartments={filteredDepartments}
            filteredCities={filteredCities}
            handleSave={handleSave}
          />
        ) : (
          <ProfileViewComponent
            name={name}
            lastName={lastName}
            userName={userName}
            mail={mail}
            birthDate={birthDate}
            address={address}
            country={country}
            department={department}
            city={city}
            countryData={countryData}
            filteredDepartments={filteredDepartments}
            filteredCities={filteredCities}
            onEdit={() => setIsEditing(true)}
          />
        )}
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
