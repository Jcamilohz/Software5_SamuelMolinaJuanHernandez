import React from 'react';
import { View } from 'react-native';
import ProductCard from '../Screens/ProductCardScreen'; 
import styles from '../../styles/styles';

const DiscountedProductComponent = ({ product, onPress }) => {
  return (
    <View style={styles.productContainer}>
      <ProductCard product={product} onPress={onPress} />
    </View>
  );
};

export default DiscountedProductComponent;
