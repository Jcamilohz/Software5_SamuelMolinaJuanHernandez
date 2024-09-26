import React from "react";
import { SafeAreaView, View, Text, ScrollView, Pressable } from 'react-native';
import styles from '../styles/styles';
import productData from "../data/ProductData";
import ProductCard from "./ProductCardScreen";
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
            <View style={styles.header}>
                <Text style={styles.text}>Carrito de compra</Text>
            </View>

            <ScrollView>
                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.text}>Productos en tu carrito</Text>
                    </View>
                    {cardProducts.map(product => (
                        <View key={product.id} style={styles.productContainer}>
                            <Pressable 
                                style={styles.removeButton} 
                                onPress={() => handleRemoveProduct(product.id)}
                            >
                                <Text style={styles.removeButtonText}>X</Text>
                            </Pressable>
                            <ProductCard
                                product={product}
                                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                            />
                        </View>
                    ))}
                </View>
                <Text style={styles.text}>El Precio total de todos los productos de tu carrito:</Text>
                <Text style={styles.text}>${totalCartPrice}</Text>
                <View style={styles.containerButton}>
                    <Pressable style={styles.buttonGreen}>
                        <Text style={styles.text}>!COMPRAR TODO AHORA¡</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

export default CartScreen;
