import React from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import RelatedProducts from '../Componets/RelatedComponent';

const ProductDetailComponent = ({
  product,
  favorite,
  toggleFavorite,
  setModalDescriptionVisible,
  setModalQuestionVisible,
  setModalCommentVisible,
  handleAddToCart,
  recentComments,
  recentQuestions,
  relatedProductsVisible,
  navigation
}) => {
  return (
    <ScrollView>
      <View style={styles.productDetailsPdS}>
        <Text style={styles.titlePdS}>{product.name}</Text>

        <View style={styles.sectionHeaderPdS}>
          <Image source={product.image} style={styles.imagePdS} resizeMode="contain" />
        </View>
        <Pressable onPress={toggleFavorite}>
          <Image
            source={
              favorite
                ? require('../../Iconos/corazon.png')
                : require('../../Iconos/me-gusta.png')
            }
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

      <View style={styles.containerButtonPdS}>
        <Pressable style={styles.buttonGreenPdS} onPress={() => navigation.navigate('buy', { productId: product.id })}>
          <Text style={styles.textPdS}>¡COMPRAR AHORA!</Text>
        </Pressable>
      </View>

      <View style={styles.containerButtonPdS}>
        <Pressable style={styles.buttonPdS} onPress={handleAddToCart}>
          <Text style={styles.textPdS}>Añadir al carrito</Text>
        </Pressable>
      </View>

      {relatedProductsVisible && (
        <RelatedProducts product={product} navigation={navigation} />
      )}


      <View style={styles.sectionPdS}>
        <Text style={styles.sectionTitlePdS}>Comentarios Recientes</Text>
        {recentComments.length > 0 ? (
          recentComments.map((comment, index) => (
            <View key={index} style={styles.commentContainerPdS}>
              <Text style={styles.textPdS}>
                ({comment.commentDate}):
              </Text>
              <Text style={styles.commentTextPdS}>
                {comment.comment} - Puntuación: {comment.score}/5
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.textPdS}>No hay comentarios disponibles</Text>
        )}
        <Pressable style={styles.buttonPdS} onPress={() => setModalCommentVisible(true)}>
          <Text style={styles.buttonTextPdS}>Ver más comentarios</Text>
        </Pressable>
      </View>

      <View style={styles.sectionPdS}>
        <Text style={styles.sectionTitlePdS}>Preguntas Recientes</Text>
        {recentQuestions.length > 0 ? (
          recentQuestions.map((question, index) => (
            <View key={index} style={styles.commentContainerPdS}>
              <Text style={styles.textPdS}>
              ({question.questionDate}):
              </Text>
              <Text style={styles.commentTextPdS}>
                {question.question}
              </Text>
              {question.answer && (
                <Text style={styles.commentScorePdS}>
                  Respuesta del vendedor ({question.answerDate}): {question.answer}
                </Text>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.textPdS}>No hay preguntas disponibles</Text>
        )}
        <Pressable style={styles.buttonPdS} onPress={() => setModalQuestionVisible(true)}>
          <Text style={styles.buttonTextPdS}>Ver más preguntas</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ProductDetailComponent;
