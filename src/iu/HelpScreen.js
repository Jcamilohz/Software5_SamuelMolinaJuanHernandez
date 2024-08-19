import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from '../styles/styles';

const HelpScreen=()=>{
    return(
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container}>
                <Text style={styles.text}>Ayuda</Text>
            </View>    
        </SafeAreaView>
    );
}

export default HelpScreen;