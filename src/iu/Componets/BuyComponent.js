import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import ProductCard from '../Screens/ProductCardScreen'; 
import styles from '../../styles/styles';

const BuyComponent = ({ product, quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.title}>Productos que vas a Comprar</Text>
        <ProductCard product={product} />
        <Text style={styles.text}>Productos en stock: {product.stock}</Text>

        <View style={styles.quantityContainer}>
          <Pressable style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.text}>-</Text>
          </Pressable>

          <Text style={styles.text}>Cantidad: {quantity}</Text>

          <Pressable style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.text}>+</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default BuyComponent;
