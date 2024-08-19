import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const OptionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <View style={styles.opcions}>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Text style={styles.text}>Editar Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('buy')}>
                        <Text style={styles.text}>Mis Compras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('myProduct')}>
                        <Text style={styles.text}>Mis Productos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('productSell')}>
                    <Text style={styles.text}>Vender Productos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('help')}>
                        <Text style={styles.text}>Ayuda</Text>
                    </TouchableOpacity>    
                    <TouchableOpacity onPress={() => navigation.navigate('sesion')}>
                        <Text style={styles.text}>Cerrar Sesion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default OptionScreen;
