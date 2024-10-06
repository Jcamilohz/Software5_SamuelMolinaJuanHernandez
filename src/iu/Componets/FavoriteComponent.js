import React from 'react';
import { View, Pressable, Text } from 'react-native';
import ProductCard from '../Screens/ProductCardScreen'; 
import styles from '../../styles/styles';

const FavoriteComponent = ({ favoriteItems, totalFavoritePrice, onRemove, onPressProduct, handleBuyAll }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Favoritos</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Tus productos favoritos</Text>

        {favoriteItems.length === 0 ? (
          <Text style={styles.text}>No hay productos en tus favoritos</Text>
        ) : (
          favoriteItems.map(product => (
            <View key={product.id} style={styles.productContainer}>
              <Pressable style={styles.removeButton} onPress={() => onRemove(product.id)}>
                <Text style={styles.removeButtonText}>X</Text>
              </Pressable>
              <ProductCard 
                product={product} 
                onPress={() => onPressProduct(product.id)} 
              />
            </View>
          ))
        )}
      </View>

      {favoriteItems.length > 0 && (
        <>
          <View style={styles.section}>
            <Text style={styles.text}>Precio total de todos tus productos favoritos:</Text>
            <Text style={styles.text}>${totalFavoritePrice.toFixed(2)}</Text>
          </View>

          <View style={styles.containerButton}>
            <Pressable style={styles.buttonGreen} onPress={handleBuyAll}>
              <Text style={styles.text}>¡COMPRAR TODO AHORA!</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
};

export default FavoriteComponent;
