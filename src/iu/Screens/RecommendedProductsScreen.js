import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Componets/ProductCardComponent';
import { useProduct } from '../../Context/ProductProvider';

const RecommendedProductScreen = ({ navigation }) => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  const recommendedProducts = products.filter(product => product.recommended);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <View style={styles.header}>
        <Text style={styles.text}>Productos recomendados para ti</Text>
      </View>
      <ScrollView>
        <View style={styles.section}>
          {recommendedProducts.length > 0 ? (
            recommendedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))
          ) : (
            <Text style={styles.noRelatedProductsText}>No hay productos recomendados.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendedProductScreen;
