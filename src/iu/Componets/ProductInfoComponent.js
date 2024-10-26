import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles/styles';

const ProductInfoComponent = ({ product, isFavorite, toggleFavorite, setModalDescriptionVisible }) => {
  return (
    <View>
      <View style={styles.productDetailsPdS}>
        <Text style={styles.titlePdS}>{product.name}</Text>
        <View style={styles.sectionHeaderPdS}>
          <Image source={product.image} style={styles.imagePdS} resizeMode="contain" />
        </View>
        <Pressable onPress={toggleFavorite}>
          <Image
            source={isFavorite ? require('../../Iconos/corazon.png') : require('../../Iconos/me-gusta.png')}
            style={styles.iconPdS}
            resizeMode="contain"
          />
        </Pressable>
      </View>

      <View style={styles.productInfoPdS}>
        {product.discount ? (
          <>
            <Text style={styles.beforePricePdS}>Precio antes: ${product.price}</Text>
            <Text style={styles.textGreenPdS}>Precio ahora: ${product.discountPrice}</Text>
            <Text style={styles.textRedPdS}>{product.discount}% de descuento</Text>
          </>
        ) : (
          <Text style={styles.textPdS}>Precio: ${product.price.toFixed(2)}</Text>
        )}
        
        {product.freeShipping ? (
          <Text style={styles.textGreenPdS}>Envío Gratis</Text>
        ) : (
          <Text style={styles.textSmallPdS}>Envío a ${product.shippingCost}</Text>
        )}
        
        <View style={styles.containerButtonPdS}>
          <Pressable style={styles.buttonPdS} onPress={() => setModalDescriptionVisible(true)}>
            <Text style={styles.textPdS}>Ver la descripción</Text>
          </Pressable>
        </View>

        <Text style={styles.textPdS}>Categorías: {product.categories.join(', ')}</Text>
        <Text style={styles.textPdS}>En stock: {product.stock}</Text>
      </View>
    </View>
  );
};

export default ProductInfoComponent;
