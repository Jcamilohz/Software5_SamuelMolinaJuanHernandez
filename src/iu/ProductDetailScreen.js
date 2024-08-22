import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Pressable, ScrollView, Button } from 'react-native';
import Header from './Header';
import styles from '../styles/styles';
import CommentModal from './Modals/CommentModal'
import ProductDescriptionModal from './Modals/ProductDescriptionModal'
import { getProductById } from '../controller/ProductController';


const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [ModalCommentVisible, setModalCommentVisible] = useState(false);
  const [ModalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const product = getProductById(productId);
  const [favorite, setFavorite] = useState(product.favorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.productDetails}>
          <Text style={styles.title}>{product.name}</Text>

          <View style={styles.sectionHeader}>
            <Image source={product.image} style={styles.image} resizeMode="contain" />
          </View>
          <Pressable onPress={toggleFavorite}>
            <Image
              source={
                favorite
                  ? require('../Iconos/corazon.png')
                  : require('../Iconos/me-gusta.png')
              }
              style={styles.icon}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.productInfo2}>
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

          {product.freeShipping ? (
            <>
              <Text style={styles.textGreen}>Envío Gratis</Text>
            </>
          ) : (<Text style={styles.textSmall}> Envío a ${product.shippingCost}</Text>)}

          <View style={styles.containerButton} >
            <Pressable style={styles.button} onPress={() => setModalDescriptionVisible(true)}>
              <Text style={styles.text}>Ver la descripcion</Text>
            </Pressable>
          </View>
        <Text style={styles.text}>En stock:{product.stock}</Text>  
        </View>

        <View style={styles.containerButton} >
          <Pressable style={styles.buttonGreen}>
            <Text style={styles.text}>!COMPRAR AHORA¡</Text>
          </Pressable>
        </View>
        <View style={styles.containerButton} >
          <Pressable style={styles.button}>
            <Text style={styles.text}>Añadir al carrito</Text>
          </Pressable>
        </View>
 
        <View style={styles.containerButton} >
          <Pressable style={styles.button} onPress={() => setModalCommentVisible(true)}>
            <Text style={styles.text}>Ver Comentarios</Text>
          </Pressable>
        </View>
      </ScrollView>
      <ProductDescriptionModal modalVisible={ModalDescriptionVisible} setModalVisible={setModalDescriptionVisible} product= {product} />
      <CommentModal modalVisible={ModalCommentVisible} setModalVisible={setModalCommentVisible} />
    </SafeAreaView>

  );
}

export default ProductDetailScreen;
