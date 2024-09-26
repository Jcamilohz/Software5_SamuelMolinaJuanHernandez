import React from 'react';
import { SafeAreaView, View, Image, Text, Pressable, ScrollView } from 'react-native';
import styles from '../styles/styles';

import personData from '../data/PersonData';

const ProfileScreen = () => {
    const getPersonById = personData.find(person => person.id === 1);

    return (
        <SafeAreaView style={styles.profileMainBackground}>
            <ScrollView contentContainerStyle={styles.profileScrollView}>
                <View style={styles.profileContainer}>
                    <Text style={styles.profileTitle}>Perfil</Text>
                    <Image source={require('../Iconos/Fotodeperfil.jpg')} style={styles.profileImage} />

                    <Text style={styles.profileLabel}>Nombre:</Text>
                    <Text style={styles.profileText}>{getPersonById.name}</Text>

                    <Text style={styles.profileLabel}>Apellido:</Text>
                    <Text style={styles.profileText}>{getPersonById.lastName} </Text>

                    <Text style={styles.profileLabel}>Usuario:</Text>
                    <Text style={styles.profileText}>{getPersonById.userName} </Text>

                    <Text style={styles.profileLabel}>Correo:</Text>
                    <Text style={styles.profileText}>{getPersonById.mail} </Text>

                    <Text style={styles.profileLabel}>Fecha de Nacimiento:</Text>
                    <Text style={styles.profileText}>{getPersonById.birthDate} </Text>

                    <Text style={styles.profileLabel}>Dirección:</Text>
                    <Text style={styles.profileText}>{getPersonById.adress} </Text>

                    <Text style={styles.profileLabel}>País:</Text>
                    <Text style={styles.profileText}>{getPersonById.country} </Text>

                    <Text style={styles.profileLabel}>Departamento:</Text>
                    <Text style={styles.profileText}>{getPersonById.departament} </Text>

                    <Text style={styles.profileLabel}>Ciudad:</Text>
                    <Text style={styles.profileText}>{getPersonById.city} </Text>

                    <Pressable style={styles.profileButton} onPress={() => {  }}>
                        <Text style={styles.profileButtonText}>Actualizar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;

