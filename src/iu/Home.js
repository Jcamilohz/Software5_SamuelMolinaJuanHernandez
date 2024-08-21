import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from './Header';
import FilterModal from './Modals/FilterModal';
import ProductCard from './ProductCardScreen';
import { getDiscountedProducts, getRecommendedProducts, getFavoriteProducts ,getCardProducts, getFreeShippingProducts} from '../controller/ProductController';
import styles from '../styles/styles';

const Home = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);

  const discountedProducts = getDiscountedProducts();
  const recommendedProducts = getRecommendedProducts();
  const favoriteProducts = getFavoriteProducts();
  const cardProducts = getCardProducts();
  const freeShippingProductsProducts = getFreeShippingProducts();

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} onFilterPress={() => setModalFilterVisible(true)} />

      <ScrollView>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.text}>Productos en descuento</Text>
            <TouchableOpacity> 
 
              <Text style={styles.textRed}>Ver Más</Text>
            </TouchableOpacity>
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
            <TouchableOpacity>
              <Text style={styles.textRed}>Ver Más</Text>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('favorites')}>
              <Text style={styles.textRed}>Ver Más</Text>
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.navigate('cart')}>
              <Text style={styles.textRed}>Ver Más</Text>
            </TouchableOpacity>
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
            <TouchableOpacity>
              <Text style={styles.textRed}>Ver Más</Text>
            </TouchableOpacity>
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