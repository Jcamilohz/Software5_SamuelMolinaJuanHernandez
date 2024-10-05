import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import MyProductComponent from '../Componets/MyProductComponent'; 
import productData from '../../data/ProductData'; 
import Toast from 'react-native-toast-message';

const MyProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState(productData.filter(product => product.sellerId === 1));


  const handlePausePublication = (productId) => {
    const productName = products.find(p => p.id === productId)?.name || 'producto'; 
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, paused: !product.paused } : product
      )
    );
    const isPaused = products.find(p => p.id === productId)?.paused; 
    Toast.show({
      type: 'success',
      text1: 'Publicación actualizada',
      text2: `La publicación del producto "${productName}" ha sido ${isPaused ? 'despausada' : 'pausada'}.`,
      position: 'bottom',
    });
  };

  const handleCancelPublication = (productId) => {
    const productName = products.find(p => p.id === productId)?.name || 'producto'; 
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    Toast.show({
      type: 'success',
      text1: 'Publicación cancelada',
      text2: `La publicación del producto "${productName}" ha sido cancelada.`,
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <MyProductComponent 
        products={products} 
        navigation={navigation} 
        onPausePublication={handlePausePublication}
        onCancelPublication={handleCancelPublication}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default MyProductScreen;
