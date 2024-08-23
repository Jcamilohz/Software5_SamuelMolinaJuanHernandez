import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import Header from './Header';
import styles from '../styles/styles';
import { searchProductsByName } from '../controller/ProductController';
import ProductCard from './ProductCardScreen'; 

const SearchResults = ({ route, navigation }) => {
  const { query } = route.params;
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  useEffect(() => {
    const results = searchProductsByName(query);
    setFilteredProducts(results);
  }, [query]);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />
      <View style={styles.searchResults}>
        <Text style={styles.text}>Resultados de búsqueda para "{query}"</Text>
      </View>
      <ScrollView>
        <View style={styles.section}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))
          ) : (
            <Text style={styles.text}>No se encontraron productos.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchResults;
