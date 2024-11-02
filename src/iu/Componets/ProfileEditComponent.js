import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/styles';

const ProfileEditComponent = ({
  name,
  setName,
  lastName,
  setLastName,
  userName,
  setUserName,
  mail,
  setMail,
  birthDate,
  setBirthDate,
  address,
  setAddress,
  country,
  handleCountryChange,
  department,
  handleDepartmentChange,
  city,
  setCity,
  filteredCountries,
  filteredDepartments,
  filteredCities,
  handleSave,
}) => {
  return (
    <View  >
      <Text style={styles.profileLabelPf}>Nombre:</Text>
      <TextInput
        style={styles.profileInputPf}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.profileLabelPf}>Apellido:</Text>
      <TextInput
        style={styles.profileInputPf}
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.profileLabelPf}>Usuario:</Text>
      <TextInput
        style={styles.profileInputPf}
        value={userName}
        onChangeText={setUserName}
      />

      <Text style={styles.profileLabelPf}>Correo:</Text>
      <TextInput
        style={styles.profileInputPf}
        value={mail}
        onChangeText={setMail}
      />

      <Text style={styles.profileLabelPf}>Fecha de Nacimiento:</Text>
      <TextInput
        style={styles.profileInputPf}
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <Text style={styles.profileLabelPf}>Dirección:</Text>
      <TextInput
        style={styles.profileInputPf}
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.profileLabelPf}>País</Text>
      <View style={styles.pickerWrapper2}>
        <Picker
          selectedValue={country}
          onValueChange={handleCountryChange}
          style={styles.picker2}
        >
          <Picker.Item label="Seleccione un país" value="" />
          {filteredCountries.map((c) => (
            <Picker.Item key={c.id} label={c.name} value={c.id.toString()} />
          ))}
        </Picker>
      </View>

      <Text style={styles.profileLabelPf}>Departamento</Text>
      <View style={styles.pickerWrapper2}>
        <Picker
          selectedValue={department}
          onValueChange={handleDepartmentChange}
          enabled={filteredDepartments.length > 0}
          style={styles.picker2}
        >
          <Picker.Item label="Seleccione un departamento" value="" />
          {filteredDepartments.map((dept) => (
            <Picker.Item key={dept.id} label={dept.name} value={dept.id.toString()} />
          ))}
        </Picker>
      </View>

      <Text style={styles.profileLabelPf}>Ciudad</Text>
      <View style={styles.pickerWrapper2}>
        <Picker
          selectedValue={city}
          onValueChange={setCity}
          enabled={filteredCities.length > 0}
          style={styles.picker2}
        >
          <Picker.Item label="Seleccione una ciudad" value="" />
          {filteredCities.map((city) => (
            <Picker.Item key={city.id} label={city.name} value={city.id.toString()} />
          ))}
        </Picker>
      </View>

      <Pressable style={styles.profileButtonPf} onPress={handleSave}>
        <Text style={styles.profileButtonTextPf}>Guardar</Text>
      </Pressable>
    </View>
  );
};

export default ProfileEditComponent;
