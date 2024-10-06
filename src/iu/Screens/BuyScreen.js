import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Pressable, ScrollView } from 'react-native';
import BuyComponent from '../Componets/BuyComponent';
import PaymentModal from "../Modals/PaymentModal";
import Toast from 'react-native-toast-message';
import styles from '../../styles/styles';

const BuyScreen = ({ route, navigation }) => {
  const { products } = route.params || {};
  
 
  const productList = Array.isArray(products) ? products.filter(p => p) : [];

  if (!productList || productList.length === 0) {
    return (
      <SafeAreaView style={styles.mainBackground}>
        <ScrollView>
          <Text style={styles.text}>No hay productos para comprar</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const [totalPrice, setTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};
    productList.forEach(product => {
      initialQuantities[product.id] = 1; 
    });
    return initialQuantities;
  });
  const [modalPaymentVisible, setModalPaymentVisible] = useState(false);

  
  useEffect(() => {
    const total = productList.reduce((sum, product) => {
      const price = product.discount > 0 ? product.discountPrice : product.price;
      return sum + price * quantities[product.id];
    }, 0);
    setTotalPrice(total);
  }, [quantities, productList]);

  const handleIncreaseQuantity = (productId) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      const product = productList.find(p => p.id === productId);

      if (newQuantities[productId] < product.stock) {  
        newQuantities[productId] += 1;
      }
      return newQuantities;
    });
  };

  const handleDecreaseQuantity = (productId) => {
    setQuantities(prevQuantities => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[productId] > 1) {  
        newQuantities[productId] -= 1;
      }
      return newQuantities;
    });
  };

  const handlePay = () => {
    Toast.show({
      type: 'success',
      text1: 'Compra realizada con éxito',
      text2: 'Gracias por comprar :)',
      position: 'bottom',
    });

    
    setTimeout(() => {
      navigation.navigate('home'); 
    }, 3500);
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView>
        <View style={styles.container4}>
          {productList.map((product) => (
            product && (
              <BuyComponent
                key={product.id}
                product={product}
                quantity={quantities[product.id]}
                increaseQuantity={() => handleIncreaseQuantity(product.id)}
                decreaseQuantity={() => handleDecreaseQuantity(product.id)}
              />
            )
          ))}

          <View style={styles.container3}>
            <Text style={styles.text}>Precio total: ${totalPrice.toFixed(2)}</Text>
            <Pressable style={styles.buttonGreen} onPress={() => setModalPaymentVisible(true)}>
              <Text style={styles.buttonText}>Comprar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <PaymentModal
        modalVisible={modalPaymentVisible}
        setModalVisible={setModalPaymentVisible}
        onSubmit={handlePay}
      />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default BuyScreen;
