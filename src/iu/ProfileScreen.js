import React from 'react';
import { SafeAreaView, View, Image, Text, Pressable, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { getPersonById } from '../controller/PersonController';

const ProfileScreen = () => {
    const person = getPersonById(1);

    return (
        <SafeAreaView style={styles.profileMainBackground}>
            <ScrollView contentContainerStyle={styles.profileScrollView}>
                <View style={styles.profileContainer}>
                    <Text style={styles.profileTitle}>Perfil</Text>
                    <Image source={require('../Iconos/Fotodeperfil.jpg')} style={styles.profileImage} />

                    <Text style={styles.profileLabel}>Nombre:</Text>
                    <Text style={styles.profileText}>{person.name}</Text>

                    <Text style={styles.profileLabel}>Apellido:</Text>
                    <Text style={styles.profileText}>{person.lastName} </Text>

                    <Text style={styles.profileLabel}>Usuario:</Text>
                    <Text style={styles.profileText}>{person.userName} </Text>

                    <Text style={styles.profileLabel}>Correo:</Text>
                    <Text style={styles.profileText}>{person.mail} </Text>

                    <Text style={styles.profileLabel}>Fecha de Nacimiento:</Text>
                    <Text style={styles.profileText}>{person.birthDate} </Text>

                    <Text style={styles.profileLabel}>Dirección:</Text>
                    <Text style={styles.profileText}>{person.adress} </Text>

                    <Text style={styles.profileLabel}>País:</Text>
                    <Text style={styles.profileText}>{person.country} </Text>

                    <Text style={styles.profileLabel}>Departamento:</Text>
                    <Text style={styles.profileText}>{person.departament} </Text>

                    <Text style={styles.profileLabel}>Ciudad:</Text>
                    <Text style={styles.profileText}>{person.city} </Text>

                    <Pressable style={styles.profileButton} onPress={() => {  }}>
                        <Text style={styles.profileButtonText}>Actualizar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;

