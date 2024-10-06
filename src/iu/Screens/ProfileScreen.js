import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, TextInput, Pressable, Text } from 'react-native';
import { useUser } from '../../Context/UserContext'; 
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';

const ProfileScreen = () => {
  const { user, updateUser } = useUser(); 
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [userName, setUserName] = useState(user?.userName || '');
  const [mail, setMail] = useState(user?.mail || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');
  const [address, setAddress] = useState(user?.address || '');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setLastName(user.lastName);
      setUserName(user.userName);
      setMail(user.mail);
      setBirthDate(user.birthDate);
      setAddress(user.address);
    }
  }, [user]); 

  const handleSave = () => {
    updateUser({ name, lastName, userName, mail, birthDate, address });
    setIsEditing(false);
    Toast.show({
      type: 'success',
      text1: 'Actualización exitosa',
      text2: 'La información del perfil ha sido actualizada correctamente.',
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.profileMainBackgroundPf}>
      <ScrollView contentContainerStyle={styles.profileScrollViewPf}>
        {isEditing ? (
          <>
            <Text style={styles.profileLabelPf}>Nombre:</Text>
            <TextInput
              style={[styles.profileInputPf, styles.profileInputTextPf]}
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.profileLabelPf}>Apellido:</Text>
            <TextInput
              style={[styles.profileInputPf, styles.profileInputTextPf]}
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.profileLabelPf}>Usuario:</Text>
            <TextInput
              style={[styles.profileInputPf, styles.profileInputTextPf]}
              value={userName}
              onChangeText={setUserName}
            />

            <Text style={styles.profileLabelPf}>Correo:</Text>
            <TextInput
              style={[styles.profileInputPf, styles.profileInputTextPf]}
              value={mail}
              onChangeText={setMail}
            />

            <Text style={styles.profileLabelPf}>Fecha de Nacimiento:</Text>
            <TextInput
              style={[styles.profileInputPf, styles.profileInputTextPf]}
              value={birthDate}
              onChangeText={setBirthDate}
            />

            <Text style={styles.profileLabelPf}>Dirección:</Text>
            <TextInput
              style={[styles.profileInputPf, styles.profileInputTextPf]}
              value={address}
              onChangeText={setAddress}
            />

            <Pressable style={styles.profileButtonPf} onPress={handleSave}>
              <Text style={styles.profileButtonTextPf}>Guardar</Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text style={styles.profileLabelPf}>Nombre: {user.name || 'Sin nombre'}</Text>
            <Text style={styles.profileLabelPf}>Apellido: {user.lastName || 'Sin apellido'}</Text>
            <Text style={styles.profileLabelPf}>Usuario: {user.userName || 'Sin usuario'}</Text>
            <Text style={styles.profileLabelPf}>Correo: {user.mail || 'Sin correo'}</Text>
            <Text style={styles.profileLabelPf}>Fecha de Nacimiento: {user.birthDate || 'Sin fecha'}</Text>
            <Text style={styles.profileLabelPf}>Dirección: {user.address || 'Sin dirección'}</Text>

            <Pressable style={styles.profileButtonPf} onPress={() => setIsEditing(true)}>
              <Text style={styles.profileButtonTextPf}>Actualizar</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
