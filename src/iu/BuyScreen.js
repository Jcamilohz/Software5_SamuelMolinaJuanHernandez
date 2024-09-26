import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Pressable,Modal } from 'react-native';
import styles from '../styles/styles';
import ProductCard from './ProductCardScreen';
import productData from "../data/ProductData";
import PaymentModal from "./Modals/PaymentModal";
import Toast from 'react-native-toast-message';

import { ScrollView } from "react-native-gesture-handler";
const BuyScreen = ({ route }) => {
    const { productId } = route.params;
    const product = productData.find(product => product.id === productId);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.discount > 0 ? product.discountPrice : product.price);
    const [ModalPaymentVisible, setModalPaymentVisible] = useState(false);

    const handlePay = () => {
        Toast.show({
            type: 'success',
            text1: 'Compra realizada con exito',
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
            <ScrollView>
                <View style={styles.container2}>
                    <Text style={styles.title}>Productos que vas a Comprar</Text>
                    <ProductCard product={product} />
                    <Text style={styles.text}>Productos en stock: {product.stock}</Text>
                    <View style={styles.quantityContainer}>
                        <Pressable style={styles.quantityButton} onPress={decreaseQuantity}>
                            <Text style={styles.text}>-</Text>
                        </Pressable>
                        <Text style={styles.text}>Cantidad: {quantity}</Text>
                        <Pressable style={styles.quantityButton} onPress={increaseQuantity}>
                            <Text style={styles.text}>+</Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.container3}>
                <Text style={styles.text}>Precio total: ${totalPrice.toFixed(2)}</Text>
                <Pressable style={styles.buttonGreen} onPress={() => setModalPaymentVisible(true)}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </Pressable>
            </View>
            </View>  
        <PaymentModal modalVisible={ModalPaymentVisible} setModalVisible={setModalPaymentVisible}  onSubmit={handlePay} />  
        <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

export default BuyScreen;
