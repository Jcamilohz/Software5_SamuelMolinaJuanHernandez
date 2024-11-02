import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, View, Pressable, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import { useFavorites } from '../../Context/FavoriteProvider';
import ProductCard from '../Componets/ProductCardComponent'; 
import styles from '../../styles/styles';

const FavoritesScreen = ({ navigation }) => {
    const { favoriteItems, removeFromFavorites } = useFavorites();

    const totalFavoritePrice = favoriteItems.reduce((total, product) => {
        const productPrice = product.discount > 0 ? product.discountPrice : product.price;
        return total + productPrice;
    }, 0);

    const handleBuyAll = () => {
        if (favoriteItems.length > 0) {
            navigation.navigate('buy', { products: favoriteItems });
        }
    };

    const handleRemoveFromFavorites = (favoriteId) => {
        removeFromFavorites(favoriteId);
        Toast.show({
            type: 'success',
            text1: 'Producto eliminado de favoritos',
            text2: 'El producto ha sido eliminado de tus favoritos',
            position: 'bottom',
        });
    };

    const handlePressProduct = (productId) => {
        navigation.navigate('ProductDetail', { productId });
    };

    return (
        <SafeAreaView style={styles.mainBackground}>
            <ScrollView>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.textWhite}>Favoritos</Text>
                    </View>

                    <View style={styles.section}>
                        {favoriteItems.length === 0 ? (
                            <Text style={styles.text}>No hay productos en tus favoritos</Text>
                        ) : (
                            favoriteItems.map(product => (
                                <View key={product.favoriteId} style={styles.productContainer}>
                                    <Pressable 
                                        style={styles.removeButton} 
                                        onPress={() => handleRemoveFromFavorites(product.favoriteId)}
                                    >
                                        <Text style={styles.removeButtonText}>X</Text>
                                    </Pressable>
                                    <ProductCard 
                                        product={product} 
                                        onPress={() => handlePressProduct(product.id)} 
                                    />
                                </View>
                            ))
                        )}
                    </View>
                </View>
            </ScrollView>

            {favoriteItems.length > 0 && (
                <View>
                    <View style={styles.section}>
                        <Text style={styles.text}>Precio total de todos tus productos favoritos:</Text>
                        <Text style={styles.text}>${totalFavoritePrice.toFixed(2)}</Text>
                    </View>

                    <View style={styles.containerButton}>
                        <Pressable style={styles.buttonGreen} onPress={handleBuyAll}>
                            <Text style={styles.textWhite}>Comprar Todo YA</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </SafeAreaView>
    );
};

export default FavoritesScreen;
