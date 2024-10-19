import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';

const ProfileViewComponent = ({
  name,
  lastName,
  userName,
  mail,
  birthDate,
  address,
  country,
  department,
  city,
  countryData,
  filteredDepartments,
  filteredCities,
  onEdit,
}) => {
  return (
    <View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Nombre: {name || 'Sin nombre'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Apellido: {lastName || 'Sin apellido'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Usuario: {userName || 'Sin usuario'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Correo: {mail || 'Sin correo'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Fecha de Nacimiento: {birthDate || 'Sin fecha'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Dirección: {address || 'Sin dirección'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>País: {countryData.find(c => c.id.toString() === country)?.name || 'Sin país'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Departamento: {filteredDepartments.find(d => d.id.toString() === department)?.name || 'Sin departamento'}</Text>
      </View>
      <View style={styles.profileBox}>
        <Text style={styles.profileLabelPf}>Ciudad: {filteredCities.find(c => c.id.toString() === city)?.name || 'Sin ciudad'}</Text>
      </View>
      <Pressable style={styles.profileButtonPf} onPress={onEdit}>
        <Text style={styles.profileButtonTextPf}>Actualizar</Text>
      </Pressable>
    </View>
  );
};

export default ProfileViewComponent;
