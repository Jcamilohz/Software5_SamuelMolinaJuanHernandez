import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';

const ProfileComponent = ({ person, onUpdate }) => {
  return (
    <View>
      <Text style={styles.profileTitlePf}>Perfil</Text>
      <Image source={require('../../Iconos/Fotodeperfil.jpg')} style={styles.image} />

      <View style={styles.profileInfoContainerPf}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.label}>{person.name}</Text>

        <Text style={styles.profileLabelPf}>Apellido:</Text>
        <Text style={styles.profileTextPf}>{person.lastName}</Text>

        <Text style={styles.profileLabelPf}>Usuario:</Text>
        <Text style={styles.profileTextPf}>{person.userName}</Text>

        <Text style={styles.profileLabelPf}>Correo:</Text>
        <Text style={styles.profileTextPf}>{person.mail}</Text>

        <Text style={styles.profileLabelPf}>Fecha de Nacimiento:</Text>
        <Text style={styles.profileTextPf}>{person.birthDate}</Text>

        <Text style={styles.profileLabelPf}>Dirección:</Text>
        <Text style={styles.profileTextPf}>{person.address}</Text>

        <Text style={styles.profileLabelPf}>País:</Text>
        <Text style={styles.profileTextPf}>{person.country}</Text>

        <Text style={styles.profileLabelPf}>Departamento:</Text>
        <Text style={styles.profileTextPf}>{person.departament}</Text>

        <Text style={styles.profileLabelPf}>Ciudad:</Text>
        <Text style={styles.profileTextPf}>{person.city}</Text>
      </View>

      <Pressable style={styles.profileButtonPf} onPress={onUpdate}>
        <Text style={styles.profileButtonTextPf}>Actualizar</Text>
      </Pressable>
    </View>
  );
};

export default ProfileComponent;
