import React from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, Image } from 'react-native';
import styles from '../styles/styles';

const SesionScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.sesionMainBackground}>
            <View style={styles.sesionLogoContainer}>
                <Image source={require('../Iconos/IconoCompraYa2SinFondo.png')} style={styles.sesionLogo} />
            </View>

            <Text style={styles.sesionInstructionText}>Iniciar sesion </Text>

            <View style={styles.sesionInputWrapper}>
                <Text style={styles.sesionLabel}>Usuario</Text>
                <TextInput
                    style={styles.sesionInput}
                    placeholder="Usuario"
                    placeholderTextColor={styles.headerTextInputPlaceholder} 
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.sesionLabel}>Contraseña</Text>
                <TextInput
                    style={styles.sesionInput}
                    placeholder="Contraseña"
                    placeholderTextColor={styles.headerTextInputPlaceholder}
                    secureTextEntry
                />
            </View>

            <Pressable style={styles.sesionButton} onPress={() => navigation.navigate('home')}>
                <Text style={styles.sesionButtonText}>Iniciar sesión</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('forgotPassword')}>
                <Text style={styles.sesionTextLink}>¿Olvidó su contraseña? </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('register')}>
                <Text style={styles.sesionTextLink}>¿No tiene cuenta? Regístrese acá </Text>
            </Pressable>
        </SafeAreaView>
    );
}

export default SesionScreen;





