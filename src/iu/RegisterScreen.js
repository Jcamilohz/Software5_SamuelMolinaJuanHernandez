import React from "react";
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const SesionScreen=({ navigation })=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <Button title="Registrarse" onPress={() => navigation.navigate('sesion')}/>
        </SafeAreaView>
    );
}

export default SesionScreen;