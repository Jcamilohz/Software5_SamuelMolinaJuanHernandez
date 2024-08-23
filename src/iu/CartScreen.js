import React from "react";
import { SafeAreaView, View,Text ,ScrollView,Pressable } from 'react-native';
import styles from '../styles/styles';
import {getAllCardProducts,getTotalCartPrice} from '../controller/ProductController';
import ProductCard from "./ProductCardScreen";

const CartScreen=({navigation})=>{
    const cardProducts = getAllCardProducts();
    const totalCartPrice = getTotalCartPrice();
    
    return(
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
                <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                />
            ))}
        </View>
        <Text style={styles.text}>El Precio total de todos los productos de tu carrito: </Text>
        <Text style={styles.text}>${totalCartPrice}</Text>
        <View style={styles.containerButton} >
          <Pressable style={styles.buttonGreen}>
            <Text style={styles.text}>!COMPRAR TODO AHORA¡</Text>
          </Pressable>
        </View>
        </ScrollView>

        </SafeAreaView>
    );
}

export default CartScreen;