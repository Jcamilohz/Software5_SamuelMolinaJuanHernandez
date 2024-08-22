import React from 'react';
import { SafeAreaView, View, Image, TextInput, Text } from 'react-native';
import styles from '../styles/styles';

const ProfileScreen=()=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <Text style={styles.text}>Perfil</Text>
            </View>    
        </SafeAreaView>
    );
}

export default ProfileScreen;