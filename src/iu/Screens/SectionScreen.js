import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import Header from '../Componets/HeaderComponent';
import FilterModal from '../Modals/FilterModal';
import ProductCard from '../Componets/ProductCardComponent'; 
import styles from '../../styles/styles';
import { useCart } from '../../Context/CartProvider';
import { useFavorites } from '../../Context/FavoriteProvider';
import { useProduct } from '../../Context/ProductProvider';  

const SectionScreen = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  
  const { cartItems } = useCart(); 
  const { favoriteItems } = useFavorites();
  const { products } = useProduct(); 
  

  const discountedProducts = products.filter(product => product.discount > 1).slice(0, 5);
  const recommendedProducts = products.filter(product => product.recommended === true).slice(0, 5);
  const freeShippingProducts = products.filter(product => product.freeShipping === true).slice(0, 5);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} onFilterPress={() => setModalFilterVisible(true)} />
      <ScrollView>
        {discountedProducts.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.text}>Productos en descuento</Text>
              <Pressable onPress={() => navigation.navigate('discounted')}>
                <Text style={styles.textRed}>Ver Más</Text>
              </Pressable>
            </View>
            {discountedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))}
          </View>
        )}

        {recommendedProducts.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.text}>Recomendados para ti</Text>
              <Pressable onPress={() => navigation.navigate('recommended')}>
                <Text style={styles.textRed}>Ver Más</Text>
              </Pressable>
            </View>
            {recommendedProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))}
          </View>
        )}

        {favoriteItems.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.text}>Tus productos en favoritos</Text>
              <Pressable onPress={() => navigation.navigate('favorites')}>
                <Text style={styles.textRed}>Ver Más</Text>
              </Pressable>
            </View>
            {favoriteItems.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))}
          </View>
        )}

        {cartItems.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.text}>Productos en tu carrito</Text>
              <Pressable onPress={() => navigation.navigate('cart')}>
                <Text style={styles.textRed}>Ver Más</Text>
              </Pressable>
            </View>
            {cartItems.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))}
          </View>
        )}

        {freeShippingProducts.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.text}>Productos con envio Gratis</Text>
              <Pressable onPress={() => navigation.navigate('freeShipping')}>
                <Text style={styles.textRed}>Ver Más</Text>
              </Pressable>
            </View>
            {freeShippingProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <FilterModal modalVisible={modalFilterVisible} setModalVisible={setModalFilterVisible} />
    </SafeAreaView>
  );
};

export default SectionScreen;
