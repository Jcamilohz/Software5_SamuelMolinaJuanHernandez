import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import RecommendedProductComponent from '../Componets/RecommendedProductsComponent';
import products from '../../data/ProductData'; 

const RecommendedProductScreen = ({ navigation }) => {

  const recommendedProducts = products.filter(product => product.recommended);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <RecommendedProductComponent 
        navigation={navigation} 
        products={recommendedProducts} 
      />
    </SafeAreaView>
  );
};

export default RecommendedProductScreen;
