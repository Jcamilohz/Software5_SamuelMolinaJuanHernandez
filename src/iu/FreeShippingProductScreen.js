import React from "react";
import { SafeAreaView, View, Text, ScrollView,Pressable } from 'react-native';
import styles from '../styles/styles';
import { getAllFreeShippingProducts} from '../controller/ProductController';
import ProductCard from "./ProductCardScreen";


const FreeShippingProduct = ({ navigation }) => {
    const freeShippingProducts = getAllFreeShippingProducts();

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Productos con envio gratis</Text>
            </View>
            <ScrollView>
            <View style={styles.section}>
                {freeShippingProducts.map(product => (
                    <ProductCard key={product.id} product={product} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} />
                ))}
            </View>
        </ScrollView>
        </SafeAreaView >

    );
}
export default FreeShippingProduct;