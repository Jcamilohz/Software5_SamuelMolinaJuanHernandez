import React from "react";
import { SafeAreaView, View,Text } from 'react-native';
import styles from '../styles/styles';

const CartScreen=()=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Carrito de compra</Text>
            </View>
        </SafeAreaView>
    );
}

export default CartScreen;