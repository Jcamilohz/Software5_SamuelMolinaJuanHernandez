import React from 'react';
import { SafeAreaView, View, Image, TextInput, Text, Button } from 'react-native';
import styles from './src/styles/styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header2}>
         <Button title='App'/>
      </View>  
    </SafeAreaView> 
  );
}

export default App;
