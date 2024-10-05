import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';

const MyProductComponent = ({ products, navigation, onPausePublication, onCancelPublication }) => {
  return (
    <ScrollView style={styles.productListContainer1}>
      <Text style={styles.headerTitle1}>Mis Productos Publicados</Text>
      {products.length > 0 ? (
        products.map((product) => (
          <View key={product.id} style={[styles.productCardContainer1, product.paused && styles.productPaused]}>
            <Image source={product.image} style={styles.productImage1} resizeMode="contain" />

            <View style={styles.productInfoContainer1}>
              <Text style={styles.productName1}>{product.name}</Text>
              <Text style={styles.productPrice1}>Precio: ${product.price}</Text>
              <Text style={styles.productStock1}>Stock: {product.stock}</Text>
            </View>

            {!product.paused && (
              <Pressable 
                style={styles.actionButton1} 
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              >
                <Text style={styles.buttonText1}>Ver Publicación</Text>
              </Pressable>
            )}

            <Pressable 
              style={styles.actionButton1} 
              onPress={() => onPausePublication(product.id)}
            >
              <Text style={styles.buttonText1}>{product.paused ? 'Despausar Publicación' : 'Pausar Publicación'}</Text>
            </Pressable>

            <Pressable 
              style={styles.actionButton1} 
              onPress={() => onCancelPublication(product.id)}
            >
              <Text style={styles.buttonText1}>Cancelar Publicación</Text>
            </Pressable>
          </View>
        ))
      ) : (
        <Text style={styles.noProductsText1}>No hay productos publicados.</Text>
      )}
    </ScrollView>
  );
};

export default MyProductComponent;
