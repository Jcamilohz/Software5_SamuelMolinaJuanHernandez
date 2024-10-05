import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Screens/ProductCardScreen';

const RecommendedProductComponent = ({ navigation, products }) => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>Productos recomendados para ti</Text>
      </View>
      <ScrollView>
        <View style={styles.section}>
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} 
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RecommendedProductComponent;
