import React from "react";
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Componets/ProductCardComponent'; 
import { useProduct } from '../../Context/ProductProvider';  

const FreeShippingProductScreen = ({ navigation }) => {
    const { products } = useProduct(); 

    const freeShippingProducts = products.filter(product => product.freeShipping === true);

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.textWhite}>Productos con envío gratis</Text>
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
