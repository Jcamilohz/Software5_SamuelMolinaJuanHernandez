import React from 'react';
import { SafeAreaView } from 'react-native';
import { useProduct } from '../../Context/ProductProvider'; 
import styles from '../../styles/styles';
import MyProductComponent from '../Componets/MyProductComponent'; 
import Toast from 'react-native-toast-message';

const MyProductScreen = ({ navigation }) => {
  const { products, setProducts } = useProduct(); 


  const sellerProducts = products.filter(product => product.sellerId === 1);

  const handlePausePublication = (productId) => {
    const productName = sellerProducts.find(p => p.id === productId)?.name || 'producto';
    const updatedProducts = sellerProducts.map(product =>
      product.id === productId ? { ...product, paused: !product.paused } : product
    );
    
    
    setProducts(updatedProducts);

    const isPaused = sellerProducts.find(p => p.id === productId)?.paused;
    Toast.show({
      type: 'success',
      text1: 'Publicación actualizada',
      text2: `La publicación del producto "${productName}" ha sido ${isPaused ? 'despausada' : 'pausada'}.`,
      position: 'bottom',
    });
  };

  const handleCancelPublication = (productId) => {
    const productName = sellerProducts.find(p => p.id === productId)?.name || 'producto';
    const updatedProducts = sellerProducts.filter(product => product.id !== productId);
    
    
    setProducts(updatedProducts);

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
        products={sellerProducts} 
        navigation={navigation}
        onPausePublication={handlePausePublication}
        onCancelPublication={handleCancelPublication}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default MyProductScreen;
