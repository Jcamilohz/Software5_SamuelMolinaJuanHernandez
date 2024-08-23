import React from "react";
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import styles from '../styles/styles';

const OptionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <View style={styles.opcions}>
                    <Pressable onPress={() => navigation.navigate('profile')}>
                        <Text style={styles.text}>Editar Perfil</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('buy')}>
                        <Text style={styles.text}>Mis Compras</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('myProduct')}>
                        <Text style={styles.text}>Mis Productos</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('productSell')}>
                    <Text style={styles.text}>Vender Productos</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('help')}>
                        <Text style={styles.text}>Ayuda</Text>
                    </Pressable>    
                    <Pressable onPress={() => navigation.navigate('sesion')}>
                        <Text style={styles.text}>Cerrar Sesion</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default OptionScreen;
