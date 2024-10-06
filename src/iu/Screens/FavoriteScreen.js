import React from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { useFavorites } from '../../Context/FavoriteProvider';
import FavoriteComponent from '../Componets/FavoriteComponent';
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


    const handleRemoveFromFavorites = (productId) => {
        removeFromFavorites(productId);
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
                <FavoriteComponent
                    favoriteItems={favoriteItems}
                    totalFavoritePrice={totalFavoritePrice}
                    onRemove={handleRemoveFromFavorites}
                    onPressProduct={handlePressProduct}
                    handleBuyAll={handleBuyAll}
                />
            </ScrollView>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
};

export default FavoritesScreen;
