import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Screens/ProductCardScreen';

const CartComponent = ({ cardProducts, totalCartPrice, handleRemoveProduct, navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Carrito de compra</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.text}>Productos en tu carrito</Text>
        </View>

        {cardProducts.map(product => (
          <View key={product.id} style={styles.productContainer}>
            <Pressable 
              style={styles.removeButton} 
              onPress={() => handleRemoveProduct(product.id)}
            >
              <Text style={styles.removeButtonText}>X</Text>
            </Pressable>
            <ProductCard product={product} onPress={() => navigation.navigate('ProductDetail', { productId: product.id })} />
          </View>
        ))}

        <Text style={styles.text}>El Precio total de todos los productos de tu carrito:</Text>
        <Text style={styles.text}>${totalCartPrice.toFixed(2)}</Text>

        <View style={styles.containerButton}>
          <Pressable style={styles.buttonGreen}>
            <Text style={styles.text}>!COMPRAR TODO AHORA¡</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartComponent;
