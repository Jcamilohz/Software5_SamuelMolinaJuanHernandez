import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, Pressable } from 'react-native';
import Header from './Header';
import FilterModal from './Modals/FilterModal';
import ProductCard from './ProductCardScreen';
import productData from '../data/ProductData';
import styles from '../styles/styles';


const Home = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);

  const discountedProducts = productData.filter(product => product.discount > 1).slice(0, 5);
  const recommendedProducts = productData.filter(product => product.recommended === true).slice(0, 5);
  const favoriteProducts = productData.filter(product => product.favorite === true).slice(0, 5); 
  const cardProducts = productData.filter(product => product.card === true).slice(0, 5);
  const freeShippingProductsProducts = productData.filter(product => product.freeShipping === true).slice(0, 5);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} onFilterPress={() => setModalFilterVisible(true)} />

      <ScrollView>

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

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.text}>Tus productos en favoritos</Text>
            <Pressable onPress={() => navigation.navigate('favorites')}>
              <Text style={styles.textRed}>Ver Más</Text>
            </Pressable>
          </View>
          {favoriteProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
            />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.text}>Productos en tu carrito</Text>
            <Pressable onPress={() => navigation.navigate('cart')}>
              <Text style={styles.textRed}>Ver Más</Text>
            </Pressable>
          </View>
          {cardProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
            />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.text}>Productos con envio Gratis</Text>
            <Pressable onPress={() => navigation.navigate('freeShipping')}>
              <Text style={styles.textRed}>Ver Más</Text>
            </Pressable>
          </View>
          {freeShippingProductsProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
            />
          ))}
        </View>
      </ScrollView>

      <FilterModal modalVisible={modalFilterVisible} setModalVisible={setModalFilterVisible} />
    </SafeAreaView>
  );
}

export default Home;