import React from 'react';
import { View, Image, TextInput, Pressable, Text } from 'react-native';
import styles from '../styles/styles';

const Header = ({ navigation, onFilterPress }) => {
  return (
    <View>
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
            onSubmitEditing={(event) =>
              navigation.navigate('SearchResults', { query: event.nativeEvent.text })
            }
          />
        </View>
        <Pressable onPress={onFilterPress}>
          <Image
            source={require('../Iconos/filtro.png')}
            style={styles.headerFilterIcon}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      <View style={styles.header2}>
        <Text style={styles.text}>Dirección</Text>
        <Text style={styles.text}>Eliminar Filtro</Text>
      </View>
    </View>
  );
}

export default Header;
