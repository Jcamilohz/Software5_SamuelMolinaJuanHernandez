import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Pressable, ScrollView, Button } from 'react-native';
import Header from './Header';
import styles from '../styles/styles';
import CommentModal from './Modals/CommentModal'
import ProductDescriptionModal from './Modals/ProductDescriptionModal'
import QuestionModal from './Modals/QuestionsModal'
import productData from '../data/ProductData';
import Toast from 'react-native-toast-message';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [ModalCommentVisible, setModalCommentVisible] = useState(false);
  const [ModalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const [ModalQuestionVisible, setModalQuestionVisible] = useState(false);
  const product = productData.find(product => product.id === productId);
  const [favorite, setFavorite] = useState(product.favorite);
 

  const handleAddToCart = () => {
    Toast.show({
      type: 'success',
      text1: 'Producto añadido al carrito',
      text2: '¡Has añadido el producto correctamente!',
      position: 'bottom',
    });
  };

  const handleAddComment = () => {
    Toast.show({
      type: 'success',
      text1: 'Comentario enviado',
      text2: 'Tu comentario ha sido enviado correctamente',
      position: 'bottom',
    });
  };

  const handleAddQuestion = () => { 
    Toast.show({
      type: 'success',
      text1: 'Pregunta enviada',
      text2: 'Tu pregunta ha sido enviada correctamente',
      position: 'bottom',
    });

  };


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
        <Text style={styles.text}>Categorias: {product.categories.join(',')}</Text>  
        <Text style={styles.text}>En stock:{product.stock}</Text>  
        </View>

        <View style={styles.containerButton} >
          <Pressable style={styles.buttonGreen}  onPress={() => navigation.navigate('buy', { productId: product.id })}>
            <Text style={styles.text}>!COMPRAR AHORA¡</Text>
          </Pressable>
        </View>
        <View style={styles.containerButton}>
        <Pressable style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.text}>Añadir al carrito</Text>
        </Pressable>
        </View>
        <View style={styles.containerButton} >
          <Pressable style={styles.button} onPress={() => setModalQuestionVisible(true)}>
            <Text style={styles.text}>Preguntar al vendedor</Text>
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </Pressable>
        </View>  
        <View style={styles.containerButton} >
          <Pressable style={styles.button}  onPress={() => setModalCommentVisible(true)}>
            <Text style={styles.text}>Ver Comentarios</Text>
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </Pressable>
        </View>
      </ScrollView>
      <ProductDescriptionModal modalVisible={ModalDescriptionVisible} setModalVisible={setModalDescriptionVisible} product= {product} />
      <CommentModal modalVisible={ModalCommentVisible} setModalVisible={setModalCommentVisible}  onSubmit={handleAddComment} productId={productId} />
      <QuestionModal modalVisible={ModalQuestionVisible} setModalVisible={setModalQuestionVisible}  onSubmit={handleAddQuestion} productId={productId} />  
      <Toast ref={(ref) => Toast.setRef(ref)} />
  
    </SafeAreaView>

  );
}

export default ProductDetailScreen;
