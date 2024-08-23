import React from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, Image, ScrollView } from 'react-native';
import styles from '../styles/styles';

const RegisterScreen = ({ navigation }) => {

    const handleRegister = () => {
        // Navegación directa sin validaciones adicionales
        navigation.navigate('sesion');
    };

    return (
        <ScrollView contentContainerStyle={styles.registerScrollView}>
            <SafeAreaView style={styles.registerMainBackground}>
                <View style={styles.registerLogoContainer}>
                    <Image source={require('../Iconos/IconoCompraYa2SinFondo.png')} style={styles.registerLogo} />
                </View>

                <Text style={styles.registerInstructionText}>Registrarse </Text>

                <View style={styles.registerInputWrapper}>
                    <Text style={styles.registerLabel}>Nombre</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Nombre"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                    />
                    <Text style={styles.registerLabel}>Usuario</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Usuario"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                        maxLength={10}
                    />
                    <Text style={styles.registerLabel}>Contraseña</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Letras+números+1 Mayús+1 caracter especial"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                        secureTextEntry
                        maxLength={8}
                    />
                    <Text style={styles.registerLabel}>Correo</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Debe contener un dominio"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Text style={styles.registerLabel}>Fecha de Nacimiento</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="DIA-MES-AÑO"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                    />
                    <Text style={styles.registerLabel}>Dirección</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="Max 30 caracteres"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                        maxLength={30}
                    />
                    <Text style={styles.registerLabel}>País, Departamento, Ciudad</Text>
                    <TextInput
                        style={styles.registerInput}
                        placeholder="País, Depto, Ciudad"
                        placeholderTextColor={styles.headerTextInputPlaceholder} 
                    />
                </View>

                <Pressable style={styles.registerButton} onPress={handleRegister}>
                    <Text style={styles.registerButtonText}>Registrarse </Text>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    );
}

export default RegisterScreen;
