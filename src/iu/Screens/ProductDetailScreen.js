import React, { useState } from 'react'; 
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useProduct } from '../../Context/ProductProvider';
import { useCart } from '../../Context/CartProvider';  
import { useFavorites } from '../../Context/FavoriteProvider'; 
import styles from '../../styles/styles';
import Header from '../Componets/HeaderComponent';
import Toast from 'react-native-toast-message';
import ProductInfoComponent from '../Componets/ProductInfoComponent';
import ProductActionsComponent from '../Componets/ProductActionsComponent';
import ProductFeedbackComponent from '../Componets/ProductFeedbackComponent';
import ProductDescriptionModal from '../Modals/ProductDescriptionModal';
import CommentModal from '../Modals/CommentModal';
import QuestionModal from '../Modals/QuestionsModal';
import RelatedProducts from '../Componets/RelatedComponent';
import commentData from '../../data/CommentData';
import questionData from '../../data/QuestionData';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const { products } = useProduct();  
  const { cartItems, addToCart } = useCart(); 
  const { favoriteItems, addToFavorites, removeFromFavorites } = useFavorites(); 


  const product = products.find(product => product.id === productId);
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

  const [relatedProductsVisible, setRelatedProductsVisible] = useState(false);  
  const [modalDescriptionVisible, setModalDescriptionVisible] = useState(false);
  const [modalCommentVisible, setModalCommentVisible] = useState(false);
  const [modalQuestionVisible, setModalQuestionVisible] = useState(false);
  
  const recentComments = commentData.filter(comment => comment.productId === productId).slice(0, 2) || [];
  const recentQuestions = questionData.filter(question => question.productId === productId).slice(0, 2) || []; 

  const isFavorite = favoriteItems.some(item => item.id === product.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
      Toast.show({
        type: 'info',
        text1: 'Eliminado de Favoritos',
        text2: 'El producto ha sido eliminado de tus favoritos.',
        position: 'bottom',
      });
    } else {
      addToFavorites(product);
      Toast.show({
        type: 'success',
        text1: 'Añadido a Favoritos',
        text2: 'El producto ha sido añadido a tus favoritos.',
        position: 'bottom',
      });
    }
  };

  const handleAddToCart = () => {
    const isProductInCart = cartItems.find(item => item.id === product.id);

    if (isProductInCart) {
      Toast.show({
        type: 'error',
        text1: 'Producto ya en el carrito',
        text2: 'Este producto ya ha sido añadido al carrito.',
        position: 'bottom',
      });
    } else {
      addToCart(product);
      Toast.show({
        type: 'success',
        text1: 'Producto añadido al carrito',
        text2: '¡Has añadido el producto correctamente!',
        position: 'bottom',
      });
      setRelatedProductsVisible(true); 
    }
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />
      <ScrollView>
        <ProductInfoComponent 
          product={product} 
          isFavorite={isFavorite} 
          toggleFavorite={handleToggleFavorite}
          setModalDescriptionVisible={setModalDescriptionVisible}
        />
        <ProductActionsComponent 
          handleAddToCart={handleAddToCart} 
          handleBuyNow={() => navigation.navigate('buy', { products: [product] })}
        />
        {relatedProductsVisible && <RelatedProducts product={product} navigation={navigation} />}
        <ProductFeedbackComponent
          recentComments={recentComments}  
          recentQuestions={recentQuestions} 
          setModalCommentVisible={setModalCommentVisible}
          setModalQuestionVisible={setModalQuestionVisible} 
        />
      </ScrollView>

      <ProductDescriptionModal
        modalVisible={modalDescriptionVisible}
        setModalVisible={setModalDescriptionVisible}
        product={product}
      />
      
      <CommentModal
        modalVisible={modalCommentVisible}
        setModalVisible={setModalCommentVisible}
        productId={product.id}
      />

      <QuestionModal
        modalVisible={modalQuestionVisible}
        setModalVisible={setModalQuestionVisible}
        productId={product.id}
      />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
