import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, Pressable, Text } from 'react-native';
import styles from '../styles/styles';
import { useUser } from '../Context/UserContext';  
import { cityData } from '../data/NationalityData';  

const Header = ({ navigation, onFilterPress }) => {
  const { user } = useUser(); 
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    if (user) {
      
      const cityName = isNaN(user.city) 
        ? user.city 
        : (cityData.find(c => c.id === parseInt(user.city))?.name || 'Ciudad desconocida');
        
    
      setUserAddress(`${user.address}, ${cityName}`);
    } else {
      setUserAddress('');
    }
  }, [user]); 

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
      
      {user && (
        <View style={styles.header2}>
          <Text style={styles.text2}>{userAddress}</Text>
        </View>
      )}
    </View>
  );
};

export default Header;
