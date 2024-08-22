import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.productCard} onPress={onPress}>
      <Image source={product.image} style={styles.productImage} resizeMode="contain" />
      <View style={styles.productInfo}>
        <Text style={styles.text}>{product.name}</Text>
        {product.discount ? (
          <>
            <Text style={styles.beforePrice}>
              Precio antes: ${product.price}
            </Text>
            <Text style={styles.textGreen}>
              Precio ahora: ${product.discountPrice}
            </Text>
            <Text style={styles.textRed}>
              {product.discount}% de descuento
            </Text>
          </>
        ) : (
          <Text style={styles.textGreen}>
            Precio: ${product.price.toFixed(2)}
          </Text>
        )}

        {product.freeShipping ?(
          <>
             <Text style={styles.textGreen}>Envío Gratis</Text>
          </>   
          ) : (  <Text style={styles.textSmall}> Envío a ${product.shippingCost}</Text>)}       

      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;