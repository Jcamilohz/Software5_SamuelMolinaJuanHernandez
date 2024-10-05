import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import BuyComponent from '../Componets/BuyComponent';
import productData from "../../data/ProductData";
import PaymentModal from "../Modals/PaymentModal";
import Toast from 'react-native-toast-message';
import styles from '../../styles/styles';

const BuyScreen = ({ route }) => {
  const { productId } = route.params;
  const product = productData.find(product => product.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.discount > 0 ? product.discountPrice : product.price);
  const [modalPaymentVisible, setModalPaymentVisible] = useState(false);

  const handlePay = () => {
    Toast.show({
      type: 'success',
      text1: 'Compra realizada con éxito',
      text2: 'Gracias por comprar :)',
      position: 'bottom',
    });
  };

  useEffect(() => {
    const price = product.discount > 0 ? product.discountPrice : product.price;
    setTotalPrice(price * quantity);
  }, [quantity, product]);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <View style={styles.container4}>
        <BuyComponent
          product={product}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <View style={styles.container3}>
          <Text style={styles.text}>Precio total: ${totalPrice.toFixed(2)}</Text>
          <Pressable style={styles.buttonGreen} onPress={() => setModalPaymentVisible(true)}>
            <Text style={styles.buttonText}>Comprar</Text>
          </Pressable>
        </View>
      </View>
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
