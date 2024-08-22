import React from 'react';
import { SafeAreaView, View,Text,Button,TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const SesionScreen=({ navigation })=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={styles.text}>ir Registrar</Text>
            </TouchableOpacity>
            <Button title="Iniciar Sesion" onPress={() => navigation.navigate('home')}/>
        </SafeAreaView>
    );
}

export default SesionScreen;