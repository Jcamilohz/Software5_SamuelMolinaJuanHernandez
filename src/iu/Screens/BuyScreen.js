import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Pressable, ScrollView } from 'react-native';
import ProductCard from '../Componets/ProductCardComponent'; 
import PaymentModal from "../Modals/PaymentModal";
import Toast from 'react-native-toast-message';
import styles from '../../styles/styles';
import { useUser } from '../../Context/UserContext';
import { usePurchase } from '../../Context/ProductPaidProvider';

const BuyScreen = ({ route, navigation }) => {
  const { products } = route.params || {};
  const { user } = useUser();
  const { addPurchase } = usePurchase();

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

  const handlePay = async () => {
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Debes iniciar sesión para realizar una compra',
        position: 'bottom',
      });
      return;
    }
    
    try {
      await Promise.all(productList.map(product => 
        addPurchase(user.id, product.id, quantities[product.id], 'En camino')
      ));
      Toast.show({
        type: 'success',
        text1: 'Compra realizada con éxito',
        text2: 'Gracias por comprar :)',
        position: 'bottom',
      });
      setTimeout(() => {
        navigation.navigate('home');
      }, 3500);
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Hubo un problema al registrar la compra',
        position: 'bottom',
      });
    }
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <View>
        <Text style={styles.title}>Productos que vas a Comprar</Text>
      </View>
      <ScrollView>
        <View style={styles.container2}>
          {productList.map((product) => (
            product && (
              <View key={product.id} style={styles.container}>
                <ProductCard product={product} />
                <Text style={styles.text}>Productos en stock: {product.stock}</Text>
                <View style={styles.quantityContainer}>
                  <Pressable style={styles.quantityButton} onPress={() => handleDecreaseQuantity(product.id)}>
                    <Text style={styles.text}>-</Text>
                  </Pressable>
                  <Text style={styles.text}>Cantidad: {quantities[product.id]}</Text>
                  <Pressable style={styles.quantityButton} onPress={() => handleIncreaseQuantity(product.id)}>
                    <Text style={styles.text}>+</Text>
                  </Pressable>
                </View>
              </View>
            )
          ))}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Precio total: ${totalPrice.toFixed(2)}</Text>
        <Pressable style={styles.buttonGreen} onPress={() => setModalPaymentVisible(true)}>
          <Text style={styles.text}>Comprar</Text>
        </Pressable>
      </View>
      <PaymentModal
        modalVisible={modalPaymentVisible}
        setModalVisible={setModalPaymentVisible}
        onSubmit={handlePay}
      />

    </SafeAreaView>
  );
};

export default BuyScreen;
