import React from "react";
import { SafeAreaView, View, Text, ScrollView,Pressable } from 'react-native';
import styles from '../styles/styles';
import { getAllFavoriteProducts, getTotalFavoritePrice } from '../controller/ProductController';
import ProductCard from "./ProductCardScreen";


const FavoritesScreen = ({ navigation }) => {
    const favoriteProducts = getAllFavoriteProducts();
    const totalCartPrice = getTotalFavoritePrice();

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.header}>
                <Text style={styles.text}>Favoritos</Text>
            </View>
            <ScrollView>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.text}>Tus productos favoritos</Text>

                </View>
                {favoriteProducts.map(product => (
                    <ProductCard key={product.id} product={product} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} />
                ))}
            </View>

            <Text style={styles.text}>El precio de todos tus productos favoritos suma: </Text>
            <Text style={styles.text}>${totalCartPrice}</Text>
            <View style={styles.containerButton} >
                <Pressable style={styles.buttonGreen}>
                    <Text style={styles.text}>!COMPRAR TODO AHORA¡</Text>
                </Pressable>
            </View>
        </ScrollView>
        </SafeAreaView >

    );
}

export default FavoritesScreen;