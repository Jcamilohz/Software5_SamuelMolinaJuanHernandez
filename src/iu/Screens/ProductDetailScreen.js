import React, { useState, useEffect } from 'react'; 
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
import { useUser } from '../../Context/UserContext';
import { useComment } from '../../Context/CommentProvider';
import { useQuestion } from '../../Context/QuestionProvider';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const { products } = useProduct();  
  const { cartItems, addToCart } = useCart(); 
  const { favoriteItems, addToFavorites, removeFromFavorites } = useFavorites(); 
  const { user } = useUser();
  const { comments, getComments } = useComment();
  const { questions, getQuestions } = useQuestion(); 

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
  
  useEffect(() => {
    if (product) {
      getComments(productId);
      getQuestions(productId);
    }
  }, [productId]);

  const recentComments = comments.slice(0, 2);
  const recentQuestions = questions.slice(0, 2); 

  const favoriteItem = favoriteItems.find(item => item.id === product.id);
  const isFavorite = !!favoriteItem;

  const handleToggleFavorite = () => {
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Inicio de sesión requerido',
        text2: 'Debes iniciar sesión para agregar productos a favoritos',
        position: 'bottom',
      });
      return;
    }

    if (isFavorite) {
      removeFromFavorites(favoriteItem.favoriteId); 
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
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Inicio de sesión requerido',
        text2: 'Debes iniciar sesión para agregar productos al carrito',
        position: 'bottom',
      });
      return;
    }
  
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

  const handleAddComment = (comment, score) => {
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Inicio de sesión requerido',
        text2: 'Debes estar autenticado para agregar comentarios',
        position: 'bottom',
      });
      return false;
    }
    return true;
  };

  const handleAddQuestion = (question) => {
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Inicio de sesión requerido',
        text2: 'Debes estar autenticado para hacer preguntas',
        position: 'bottom',
      });
      return false;
    }
    return true;
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
          isUserLoggedIn={!!user} 
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
        onBeforeComment={handleAddComment}
      />

      <QuestionModal
        modalVisible={modalQuestionVisible}
        setModalVisible={setModalQuestionVisible}
        productId={product.id}
        onSubmit={handleAddQuestion}
      />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;