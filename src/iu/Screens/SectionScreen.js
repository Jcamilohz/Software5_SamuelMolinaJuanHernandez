import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../Header';
import FilterModal from '../Modals/FilterModal';
import SectionComponent from '../Componets/SectionComponet';
import styles from '../../styles/styles';
import { useCart } from '../../Context/CartProvider';
import { useFavorites } from '../../Context/FavoriteProvider';
import productData from '../../data/ProductData';  

const SectionScreen = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);
  
  const { cartItems } = useCart(); 
  const { favoriteItems } = useFavorites();  
  
 
  const discountedProducts = productData.filter(product => product.discount > 1).slice(0, 5);
  const recommendedProducts = productData.filter(product => product.recommended === true).slice(0, 5);
  const freeShippingProducts = productData.filter(product => product.freeShipping === true).slice(0, 5);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} onFilterPress={() => setModalFilterVisible(true)} />
      <ScrollView>
        {discountedProducts.length > 0 && (
          <SectionComponent 
            title="Productos en descuento" 
            products={discountedProducts} 
            navigation={navigation} 
            viewMoreRoute="discounted" 
          />
        )}

        {recommendedProducts.length > 0 && (
          <SectionComponent 
            title="Recomendados para ti" 
            products={recommendedProducts} 
            navigation={navigation} 
            viewMoreRoute="recommended" 
          />
        )}

        {favoriteItems.length > 0 && (
          <SectionComponent 
            title="Tus productos en favoritos" 
            products={favoriteItems}  
            navigation={navigation} 
            viewMoreRoute="favorites" 
          />
        )}

        {cartItems.length > 0 && (
          <SectionComponent 
            title="Productos en tu carrito" 
            products={cartItems} 
            navigation={navigation} 
            viewMoreRoute="cart" 
          />
        )}

        {freeShippingProducts.length > 0 && (
          <SectionComponent 
            title="Productos con envio Gratis" 
            products={freeShippingProducts} 
            navigation={navigation} 
            viewMoreRoute="freeShipping" 
          />
        )}
      </ScrollView>

      <FilterModal modalVisible={modalFilterVisible} setModalVisible={setModalFilterVisible} />
    </SafeAreaView>
  );
}

export default SectionScreen;
