import React, { useState }from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import styles from '../styles/styles';
import CommentModal from './Modals/CommentModal'
import ProductDescriptionModal from './Modals/ProductDescriptionModal'

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [ModalCommentVisible, setModalCommentVisible] = useState(false);
  const [ModalDescriptionVisible, setModalDescriptionVisible] = useState(false);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />

      <View style={styles.productDetails}>
        <Text style={styles.text}>Detalles del Producto {productId}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalDescriptionVisible(true)}>
          <Text style={styles.text}>Ver Descripción</Text>
        </TouchableOpacity>
      </View>  
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setModalCommentVisible(true)}>
          <Text style={styles.text}>Ver Comentarios</Text>
        </TouchableOpacity>
      </View>  
      
      <ProductDescriptionModal modalVisible={ModalDescriptionVisible} setModalVisible={setModalDescriptionVisible} />
      <CommentModal modalVisible={ModalCommentVisible} setModalVisible={setModalCommentVisible} />
    </SafeAreaView>
    
  );
}

export default ProductDetailScreen;
