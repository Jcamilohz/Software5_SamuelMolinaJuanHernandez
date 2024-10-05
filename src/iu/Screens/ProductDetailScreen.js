import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import Header from '../Header';
import ProductDetailComponent from '../Componets/ProductDetailComponent';
import Toast from 'react-native-toast-message';
import CommentModal from '../Modals/CommentModal';
import ProductDescriptionModal from '../Modals/ProductDescriptionModal';
import QuestionModal from '../Modals/QuestionsModal';
import RelatedProducts from '../Componets/RelatedComponent';
import productData from '../../data/ProductData';
import commentData from '../../data/CommentData';
import questionData from '../../data/QuestionData';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [ModalCommentVisible, setModalCommentVisible] = useState(false);
  const [ModalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const [ModalQuestionVisible, setModalQuestionVisible] = useState(false);
  const product = productData.find(product => product.id === productId);
  const [favorite, setFavorite] = useState(product.favorite);
  const [relatedProductsVisible, setRelatedProductsVisible] = useState(false);

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

  const handleAddToCart = () => {
    Toast.show({
      type: 'success',
      text1: 'Producto añadido al carrito',
      text2: '¡Has añadido el producto correctamente!',
      position: 'bottom',
    });
    setRelatedProductsVisible(true);
  };

  const recentComments = commentData.filter(comment => comment.productId === productId).slice(0, 2);
  const recentQuestions = questionData.filter(question => question.productId === productId).slice(0, 2);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />
      <ScrollView>
        <ProductDetailComponent
          product={product}
          favorite={favorite}
          toggleFavorite={toggleFavorite}
          setModalDescriptionVisible={setModalDescriptionVisible}
          setModalQuestionVisible={setModalQuestionVisible}
          setModalCommentVisible={setModalCommentVisible}
          handleAddToCart={handleAddToCart}
          recentComments={recentComments}
          recentQuestions={recentQuestions}
          relatedProductsVisible={relatedProductsVisible}
          navigation={navigation}
        />
      </ScrollView>
      
      <ProductDescriptionModal
        modalVisible={ModalDescriptionVisible}
        setModalVisible={setModalDescriptionVisible}
        product={product}
      />

      <CommentModal
        modalVisible={ModalCommentVisible}
        setModalVisible={setModalCommentVisible}
        onSubmit={handleAddComment}
        productId={product.id}
      />

      <QuestionModal
        modalVisible={ModalQuestionVisible}
        setModalVisible={setModalQuestionVisible}
        onSubmit={handleAddQuestion}
        productId={product.id}
      />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
