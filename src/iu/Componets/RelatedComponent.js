import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';
import productData from '../../data/ProductData';

const RelatedProducts = ({ product, navigation }) => {
  const relatedProducts = productData.filter(p =>
    p.categories.some(category => product.categories.includes(category)) && p.id !== product.id
  ).slice(0, 5);

  return (
    <View style={styles.sectionPdS}>
      <Text style={styles.sectionTitlePdS}>Productos Relacionados</Text>
      <ScrollView horizontal>
        {relatedProducts.length > 0 ? (
          relatedProducts.map((relatedProduct) => (
            <Pressable
              key={relatedProduct.id}
              style={styles.relatedProductCard}
              onPress={() => navigation.navigate('ProductDetail', { productId: relatedProduct.id })}
            >
              <Image
                source={relatedProduct.image}
                style={styles.relatedProductImage}
                resizeMode="contain"
              />
              <Text style={styles.relatedProductText}>{relatedProduct.name}</Text>
              <Text style={styles.relatedProductPrice}>${relatedProduct.price.toFixed(2)}</Text>
            </Pressable>
          ))
        ) : (
          <Text style={styles.noRelatedProductsText}>No hay productos relacionados</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default RelatedProducts;
