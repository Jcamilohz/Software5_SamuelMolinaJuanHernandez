import React from "react";
import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Componets/ProductCardComponent';
import { useCart } from '../../Context/CartProvider';
import Toast from 'react-native-toast-message';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart } = useCart();

  const totalCartPrice = cartItems.reduce((total, product) => {
    const productPrice = product.discount > 0 ? product.discountPrice : product.price;
    return total + productPrice;
  }, 0);

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
    Toast.show({
      type: 'success',
      text1: 'Producto eliminado',
      text2: 'Producto eliminado del carrito con éxito',
      position: 'bottom',
    });
  };

  const handleBuyAll = () => {
    if (cartItems.length > 0) {
      navigation.navigate('buy', { products: cartItems });
    }
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={styles.textWhite}>Carrito de compra</Text>
          </View>

          <View style={styles.section}>
            {cartItems.length === 0 ? (
              <Text style={styles.text}>No hay productos en tu carrito</Text>
            ) : (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.text}>Productos en tu carrito</Text>
                </View>

                {cartItems.map(product => (
                  <View key={product.id} style={styles.productContainer}>
                    <Pressable
                      style={styles.removeButton}
                      onPress={() => handleRemoveProduct(product.id)}
                    >
                      <Text style={styles.removeButtonText}>X</Text>
                    </Pressable>
                    <ProductCard
                      product={product}
                      onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
                    />
                  </View>
                ))}




              </>
            )}
          </View>
        </View>
      </ScrollView>

      {cartItems.length > 0 && (
        <View>
          <View style={styles.section}>
            <Text style={styles.text}>Precio total de todos tus productos en carrito:</Text>
            <Text style={styles.text}>${totalCartPrice.toFixed(2)}</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable style={styles.buttonGreen} onPress={handleBuyAll}>
              <Text style={styles.textWhite}>Comprar Todo YA</Text>
            </Pressable>
          </View>
        </View>
      )}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default CartScreen;
