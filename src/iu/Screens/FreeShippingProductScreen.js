import React from "react";
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import productData from '../../data/ProductData';
import FreeShippingProductComponent from '../Componets/FreeShippingProductComponent'; 

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
                        <FreeShippingProductComponent
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

export default FreeShippingProductScreen;
