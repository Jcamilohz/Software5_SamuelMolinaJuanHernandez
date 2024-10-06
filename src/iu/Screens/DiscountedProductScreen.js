import React from "react";
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import productData from "../../data/ProductData";
import DiscountedProductComponent from "../Componets/DiscountedProductComponent";

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
                        <DiscountedProductComponent
                            key={product.id}
                            product={product}
                            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default DiscountedProductScreen;
