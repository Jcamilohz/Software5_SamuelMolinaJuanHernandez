import React from 'react';
import { SafeAreaView} from 'react-native';
import styles from '../../styles/styles';
import RecommendedProductComponent from '../Componets/RecommendedProductsComponent';
import { getAllRecommendedProducts } from '../../controller/ProductController';

const RecommendedProductScreen = ({ navigation }) => {
  const recommendedProducts = getAllRecommendedProducts();

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
