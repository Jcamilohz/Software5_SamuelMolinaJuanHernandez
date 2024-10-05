import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Screens/ProductCardScreen';

const SearchResultsComponent = ({ query, filteredProducts, navigation }) => {
  return (
    <>
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
    </>
  );
};

export default SearchResultsComponent;
