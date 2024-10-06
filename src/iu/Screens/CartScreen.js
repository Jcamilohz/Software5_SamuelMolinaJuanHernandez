import React from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import CartComponent from "../Componets/CartComponent";
import { useCart } from '../../Context/CartProvider';  
import Toast from 'react-native-toast-message';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart } = useCart(); 

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);  
    Toast.show({
      type: 'success',
      text1: 'Producto eliminado',
      text2: 'Producto eliminado del carrito con éxito',
      position: 'bottom',
    });
  };

  const handleBuyAll = () => {
    if (cartItems.length > 0) {
      navigation.navigate('buy', { products: cartItems }); 
    }
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView>
        <CartComponent 
          cartItems={cartItems}  
          handleRemoveProduct={handleRemoveProduct}
          handleBuyAll={handleBuyAll} 
          navigation={navigation}
        />
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default CartScreen;
