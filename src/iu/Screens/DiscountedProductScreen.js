import React from "react";
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import productData from "../../data/ProductData";
import ProductCard from '../Componets/ProductCardComponent'; 

const DiscountedProductScreen = ({ navigation }) => {
    const discountedProducts = productData.filter(product => product.discount > 0);

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Productos en descuento</Text>
            </View>
            <ScrollView>
                <View style={styles.section}>
                    {discountedProducts.map(product => (
                        <View key={product.id} style={styles.productContainer}>
                            <ProductCard 
                                product={product} 
                                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} 
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DiscountedProductScreen;
