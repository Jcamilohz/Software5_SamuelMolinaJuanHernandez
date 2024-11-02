import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import Header from '../Componets/HeaderComponent';
import ProductCard from '../Componets/ProductCardComponent';
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

      <View style={styles.padding}>
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
};

export default SearchResultsScreen;
