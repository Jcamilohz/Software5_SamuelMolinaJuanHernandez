import React from "react";
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const MyProductScreen=({ navigation })=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <Text style={styles.text}>Mis Productos</Text>
            </View>
        </SafeAreaView>
    );
}

export default MyProductScreen;
