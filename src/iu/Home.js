import React from 'react';
import { SafeAreaView, View, Image, TextInput, Text } from 'react-native';
import styles from '../styles/styles';

const Home=()=>{


return(
<SafeAreaView style={styles.mainBackground}>
      <View style={styles.header}>
        <Image
          source={require('../Iconos/IconoCompraYa2SinFondo.png')}
          style={styles.headerIcon}
        />
        
        <View style={styles.inputContainer}>
          <Image
            source={require('../Iconos/lupa.png')}
            style={styles.headerSearchIcon}
          />
          <TextInput
            style={styles.headerTextInput}
            placeholder="Buscar un producto"
            placeholderTextColor={styles.headerTextInputPlaceholder}
          />
        </View>
        <Image
            source={require('../Iconos/filtro.png')}
            style={styles.headerFilterIcon}
            resizeMode="contain"
          />        
      </View>

      <View style={styles.header2}>
        <Text style={styles.text}>Direccion


        </Text>
        
        
      </View>
      
    </SafeAreaView>
);

}

export default Home;