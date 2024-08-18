import React from "react";
import { SafeAreaView, View,Text } from 'react-native';
import styles from '../styles/styles';

const ProfileScreen=()=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Editar Perfil</Text>
                <Text style={styles.text}>Cerrar Sesion</Text>
                <Text style={styles.text}>Mis Compras</Text>
                <Text style={styles.text}>Mis Productos</Text>
                <Text style={styles.text}>Vender Productos</Text>

            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;