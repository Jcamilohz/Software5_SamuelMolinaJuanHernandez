import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Screens/ProductCardScreen';

const CartComponent = ({ cartItems, handleRemoveProduct, handleBuyAll, navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Carrito de compra</Text>
      </View>

      <View style={styles.section}>
        {cartItems.length === 0 ? (
          <Text style={styles.text}>No hay productos en tu carrito</Text>
        ) : (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.text}>Productos en tu carrito</Text>
            </View>

            {cartItems.map(product => (
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

            <View style={styles.containerButton}>
              <Pressable style={styles.buttonGreen} onPress={handleBuyAll}>
                <Text style={styles.text}>!COMPRAR TODO AHORA!</Text>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default CartComponent;
