import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../../styles/styles';

const ProductActionsComponent = ({ handleAddToCart, handleBuyNow }) => {
  return (
    <View>
      <View style={styles.containerButtonPdS}>
        <Pressable style={styles.buttonGreenPdS} onPress={handleBuyNow}>
          <Text style={styles.textWhite}>Comprar YA</Text>
        </Pressable>
      </View>

      <View style={styles.containerButtonPdS}>
        <Pressable style={styles.buttonPdS} onPress={handleAddToCart}>
          <Text style={styles.textPdS}>Añadir al carrito</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductActionsComponent;
