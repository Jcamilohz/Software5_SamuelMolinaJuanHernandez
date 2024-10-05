import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import MyBuysComponent from '../Componets/MyBuysComponent';
import productPaidData from '../../data/ProductPaidData';
import productData from '../../data/ProductData';
import Toast from 'react-native-toast-message';

const steps = ['Validando compra', 'En centro de distribución', 'En camino', 'Entregado'];

const MyBuysScreen = ({ navigation }) => {
  const getProductById = (productId) => productData.find(product => product.id === productId);
  
  const paidProducts = productPaidData.filter(productPaid => productPaid.personId === 1)
    .map(productPaid => {
      const product = getProductById(productPaid.productId);
      return { 
        ...product, 
        status: productPaid.status,
        currentStepIndex: steps.indexOf(productPaid.status),
      };
    });

  const handleCancelPurchase = (productName) => {
    Toast.show({
      type: 'success',
      text1: 'Compra cancelada',
      text2: `Has cancelado la compra del producto "${productName}".`,
      position: 'bottom',
    });
  };

  const handleReturnItem = (productName) => {
    Toast.show({
      type: 'success',
      text1: 'Artículo devuelto',
      text2: `Has devuelto el artículo "${productName}".`,
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <MyBuysComponent 
        paidProducts={paidProducts} 
        navigation={navigation} 
        steps={steps} 
        onCancelPurchase={handleCancelPurchase}
        onReturnItem={handleReturnItem}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default MyBuysScreen;
