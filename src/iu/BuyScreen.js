import React from "react";
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const BuyScreen=({ navigation })=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <Text style={styles.text}>Comprar</Text>
            </View>
        </SafeAreaView>
    );
}

export default BuyScreen;