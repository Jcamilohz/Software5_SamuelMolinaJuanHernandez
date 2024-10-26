import React from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import products from '../../data/ProductData'; 
import ProductCard from '../Componets/ProductCardComponent';

const RecommendedProductScreen = ({ navigation }) => {
  const recommendedProducts = products.filter(product => product.recommended);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <View style={styles.header}>
        <Text style={styles.text}>Productos recomendados para ti</Text>
      </View>
      <ScrollView>
        <View style={styles.section}>
          {recommendedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} 
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecommendedProductScreen;
