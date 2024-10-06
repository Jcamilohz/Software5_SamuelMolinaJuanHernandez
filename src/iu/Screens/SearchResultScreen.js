import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import Header from '../Header';
import SearchResultsComponent from '../Componets/SearchResultsComponent';
import { useProduct } from '../../Context/ProductProvider';

const SearchResultsScreen = ({ route, navigation }) => {
  const { query } = route.params;
  const { filteredProducts, filterProducts } = useProduct(); 

  useEffect(() => {
    filterProducts(query); 
  }, [query]);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />
      <SearchResultsComponent
        query={query}
        filteredProducts={filteredProducts}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default SearchResultsScreen;
