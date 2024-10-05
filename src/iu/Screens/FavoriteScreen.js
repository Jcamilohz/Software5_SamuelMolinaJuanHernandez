import React from "react";
import { SafeAreaView, View, Text, ScrollView, Pressable } from 'react-native';
import styles from '../../styles/styles';
import productData from "../../data/ProductData";
import FavoriteComponent from '../Componets/FavoriteComponent'; 
import Toast from 'react-native-toast-message';

const FavoritesScreen = ({ navigation }) => {
   
    const favoriteProducts = productData.filter(product => product.favorite === true);


    const totalFavoritePrice = favoriteProducts.reduce((total, product) => {
        const productPrice = product.discount > 0 ? product.discountPrice : product.price;
        return total + productPrice;
    }, 0);

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
                        <FavoriteComponent
                            key={product.id}
                            product={product}
                            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                        />
                    ))}
                </View>

                <Text style={styles.text}>El precio total de todos tus productos favoritos: </Text>
                <Text style={styles.text}>${totalFavoritePrice.toFixed(2)}</Text>
                <View style={styles.containerButton}>
                    <Pressable style={styles.buttonGreen}>
                        <Text style={styles.text}>!COMPRAR TODO AHORA¡</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

export default FavoritesScreen;
