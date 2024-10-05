import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import Header from '../Header';
import SearchResultsComponent from '../Componets/SearchResultsComponent';
import { searchProductsByName } from '../../controller/ProductController';

const SearchResultsScreen = ({ route, navigation }) => {
  const { query } = route.params;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const results = searchProductsByName(query);
    setFilteredProducts(results);
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
