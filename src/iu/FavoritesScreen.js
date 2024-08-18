import React from "react";
import { SafeAreaView, View,Text } from 'react-native';
import styles from '../styles/styles';

const FavoritesScreen=()=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Favoritos</Text>
            </View>
        </SafeAreaView>
    );
}

export default FavoritesScreen;