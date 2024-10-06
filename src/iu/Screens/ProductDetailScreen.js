import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useProductId } from '../../Context/ProductIdContext';  
import { useCart } from '../../Context/CartProvider';  
import styles from '../../styles/styles';
import Header from '../Header';
import ProductDetailComponent from '../Componets/ProductDetailComponent';
import Toast from 'react-native-toast-message';
import CommentModal from '../Modals/CommentModal';
import ProductDescriptionModal from '../Modals/ProductDescriptionModal';
import QuestionModal from '../Modals/QuestionsModal';
import productData from '../../data/ProductData';
import commentData from '../../data/CommentData';
import questionData from '../../data/QuestionData';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const { setProductId } = useProductId();  
  const { addToCart } = useCart();  

  const product = productData.find(product => product.id === productId);
  if (!product) {
    return (
      <SafeAreaView style={styles.mainBackground}>
        <Header navigation={navigation} />
        <ScrollView>
          <Text style={styles.text}>Producto no encontrado</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  const [ModalCommentVisible, setModalCommentVisible] = useState(false);
  const [ModalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const [ModalQuestionVisible, setModalQuestionVisible] = useState(false);
  const [favorite, setFavorite] = useState(product.favorite);
  const [relatedProductsVisible, setRelatedProductsVisible] = useState(false);

  const handleBuyNow = () => {
    console.log('Producto que se va a comprar:', product); 
    navigation.navigate('buy', { products: [product] });
  };

  const handleAddToCart = () => {
    addToCart(product);
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
          toggleFavorite={() => setFavorite(!favorite)}
          setModalDescriptionVisible={setModalDescriptionVisible}
          setModalQuestionVisible={setModalQuestionVisible}
          setModalCommentVisible={setModalCommentVisible}
          handleAddToCart={handleAddToCart}
          handleBuyNow={handleBuyNow}  
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
        productId={product.id}
      />

      <QuestionModal
        modalVisible={ModalQuestionVisible}
        setModalVisible={setModalQuestionVisible}
        productId={product.id}
      />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
