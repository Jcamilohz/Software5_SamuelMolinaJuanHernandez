import React from "react";
import { SafeAreaView, View, Text, ScrollView,Pressable } from 'react-native';
import styles from '../styles/styles';
import { getAllDiscountedProducts} from '../controller/ProductController';
import ProductCard from "./ProductCardScreen";


const DiscountedProduct = ({ navigation }) => {
    const discountedProducts = getAllDiscountedProducts();

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Productos en descuento</Text>
            </View>
            <ScrollView>
            <View style={styles.section}>
                {discountedProducts.map(product => (
                    <ProductCard key={product.id} product={product} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} />
                ))}
            </View>
        </ScrollView>
        </SafeAreaView >

    );
}
export default DiscountedProduct;