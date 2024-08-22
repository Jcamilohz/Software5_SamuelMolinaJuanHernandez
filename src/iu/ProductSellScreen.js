import React from "react";
import { SafeAreaView, View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const ProductSellScreen=({ navigation })=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <Text style={styles.text}>Vender Productos</Text>
            </View>
        </SafeAreaView>
    );
}

export default ProductSellScreen;
    