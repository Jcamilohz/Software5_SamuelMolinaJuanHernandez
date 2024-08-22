import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
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

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} />

      <View style={styles.productDetails}>
        <Text style={styles.text}>{product.name}</Text>
        <View style={styles.sectionHeader}>
          <Image source={product.image} style={styles.image} resizeMode="contain" />
        </View>


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
