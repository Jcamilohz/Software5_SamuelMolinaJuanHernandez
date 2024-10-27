import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useProduct } from '../../Context/ProductProvider';
import { useUser } from '../../Context/UserContext'; 
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';

const MyProductScreen = ({ navigation }) => {
  const { products, setProducts } = useProduct();
  const { user } = useUser();

  const publishedProducts = products.filter(product => product.sellerId === user?.id);

  const handlePausePublication = (productId) => {
    const productName = publishedProducts.find(p => p.id === productId)?.name || 'producto';
    const updatedProducts = publishedProducts.map(product =>
      product.id === productId ? { ...product, paused: !product.paused } : product
    );

    setProducts(updatedProducts);

    const isPaused = publishedProducts.find(p => p.id === productId)?.paused;
    Toast.show({
      type: 'success',
      text1: 'Publicación actualizada',
      text2: `La publicación del producto "${productName}" ha sido ${isPaused ? 'despausada' : 'pausada'}.`,
      position: 'bottom',
    });
  };

  const handleCancelPublication = (productId) => {
    const productName = publishedProducts.find(p => p.id === productId)?.name || 'producto';
    const updatedProducts = publishedProducts.filter(product => product.id !== productId);
    
    setProducts(updatedProducts);

    Toast.show({
      type: 'success',
      text1: 'Publicación cancelada',
      text2: `La publicación del producto "${productName}" ha sido cancelada.`,
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView style={styles.productListContainer1}>
        <Text style={styles.headerTitle1}>Productos Publicados</Text>
        {publishedProducts.length > 0 ? (
          publishedProducts.map((product) => (
            <View key={product.id} style={[styles.productCardContainer1, product.paused && styles.productPaused]}>
              <Image source={{ uri: product.image }} style={styles.productImage1} resizeMode="contain" />

              <View style={styles.productInfoContainer1}>
                <Text style={styles.productName1}>{product.name}</Text>
                <Text style={styles.productPrice1}>Precio: ${product.price}</Text>
                <Text style={styles.productStock1}>Stock: {product.stock}</Text>
              </View>

              {!product.paused && (
                <Pressable 
                  style={styles.actionButton1} 
                  onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                >
                  <Text style={styles.buttonText1}>Ver Publicación</Text>
                </Pressable>
              )}

              <Pressable 
                style={styles.actionButton1} 
                onPress={() => handlePausePublication(product.id)}
              >
                <Text style={styles.buttonText1}>{product.paused ? 'Despausar Publicación' : 'Pausar Publicación'}</Text>
              </Pressable>

              <Pressable 
                style={styles.actionButton1} 
                onPress={() => handleCancelPublication(product.id)}
              >
                <Text style={styles.buttonText1}>Cancelar Publicación</Text>
              </Pressable>
            </View>
          ))
        ) : (
          <Text style={styles.noProductsText1}>No hay productos publicados.</Text>
        )}
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default MyProductScreen;
