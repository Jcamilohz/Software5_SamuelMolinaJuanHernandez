import React from "react";
import { SafeAreaView, ScrollView, Text, Pressable, View } from 'react-native';
import styles from '../../styles/styles';
import productData from "../../data/ProductData";
import CartComponent from "../Componets/CartComponent";
import Toast from 'react-native-toast-message';

const CartScreen = ({ navigation }) => {
  const cardProducts = productData.filter(product => product.card === true);

  const totalCartPrice = cardProducts.reduce((total, product) => {
    const productPrice = product.discount > 0 ? product.discountPrice : product.price;
    const shippingCost = product.shippingCost;

    return total + productPrice + shippingCost;
  }, 0);

  const handleRemoveProduct = (productId) => {
    Toast.show({
      type: 'success',
      text1: 'Producto eliminado',
      text2: 'Producto eliminado del carrito con éxito',
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView>
        <CartComponent 
          cardProducts={cardProducts}
          totalCartPrice={totalCartPrice}
          handleRemoveProduct={handleRemoveProduct}
          navigation={navigation}
        />
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default CartScreen;
