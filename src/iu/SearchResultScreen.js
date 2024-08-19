import Reac from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Header from './Header';
import styles from '../styles/styles';


const SearchResults = ({ route, navigation }) => {
  const { query } = route.params;

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />

      <View style={styles.searchResults}>
        <Text style={styles.text}>Resultados de búsqueda para "{query}"</Text>

      </View>
    </SafeAreaView>
  );
}

export default SearchResults;
