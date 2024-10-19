import React from "react";
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import productData from '../../data/ProductData';
import ProductCard from '../Componets/ProductCardComponent';

const FreeShippingProductScreen = ({ navigation }) => {
    const freeShippingProducts = productData.filter(product => product.freeShipping === true);

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Productos con envío gratis</Text>
            </View>
            <ScrollView>
                <View style={styles.section}>
                    {freeShippingProducts.map(product => (
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

export default FreeShippingProductScreen;
