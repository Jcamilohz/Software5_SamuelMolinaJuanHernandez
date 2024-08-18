import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <View style={styles.opcions}>
                    <Text style={styles.text}>Editar Perfil</Text>
                    <Text style={styles.text}>Mis Compras</Text>
                    <Text style={styles.text}>Mis Productos</Text>
                    <Text style={styles.text}>Vender Productos</Text>
                    <Text style={styles.text}>Ayuda</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('sesion')}>
                        <Text style={styles.text}>Cerrar Sesion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;
