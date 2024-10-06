import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Pressable, ScrollView } from 'react-native';
import BuyComponent from '../Componets/BuyComponent';
import PaymentModal from "../Modals/PaymentModal";
import Toast from 'react-native-toast-message';
import styles from '../../styles/styles';

const BuyScreen = ({ route }) => {
  const { products } = route.params || {};  

  console.log('Productos recibidos en BuyScreen:', products); 

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
  const [modalPaymentVisible, setModalPaymentVisible] = useState(false);

  useEffect(() => {
    const total = productList.reduce((sum, product) => {
      const price = product.discount > 0 ? product.discountPrice : product.price;
      return sum + price;
    }, 0);
    setTotalPrice(total);
  }, [productList]);

  const handlePay = () => {
    Toast.show({
      type: 'success',
      text1: 'Compra realizada con éxito',
      text2: 'Gracias por comprar :)',
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView>
        <View style={styles.container4}>
          <Text style={styles.title}>Productos que vas a Comprar</Text>

          {productList.map((product) => (
            product && (
              <BuyComponent
                key={product.id}
                product={product}
                quantity={1}
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
