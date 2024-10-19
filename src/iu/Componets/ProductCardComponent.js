import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/styles';

const ProductCardComponent = ({ product, onPress }) => {
  return (
    <Pressable style={styles.productCard} onPress={onPress}>
      <Image source={product.image} style={styles.productImage} resizeMode="contain" />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{product.name}</Text>
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
          <Text style={styles.text}>
            Precio: ${product.price.toFixed(2)}
          </Text>
        )}

        {product.freeShipping ?(
          <>
             <Text style={styles.textGreen}>Envío Gratis</Text>
          </>   
          ) : (  <Text style={styles.textSmall}> Envío a ${product.shippingCost}</Text>)}       

      </View>
    </Pressable>
  );
};

export default ProductCardComponent;