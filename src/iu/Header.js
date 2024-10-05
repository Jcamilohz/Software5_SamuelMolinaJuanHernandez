import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, Pressable, Text } from 'react-native';
import styles from '../styles/styles';
import personData from '../data/PersonData';

const Header = ({ navigation, onFilterPress }) => {
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    const person = personData.find(person => person.id === 1);
    if (person) {
      setUserAddress(`${person.adress}, ${person.city}`);
    }
  }, []);

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
        <Text style={styles.text2}>{userAddress}</Text>
      </View>
    </View>
  );
};

export default Header;
