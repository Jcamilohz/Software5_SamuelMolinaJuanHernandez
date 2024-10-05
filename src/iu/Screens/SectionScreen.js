import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from '../Header';
import FilterModal from '../Modals/FilterModal';
import SectionComponent from '../Componets/SectionComponet';
import productData from '../../data/ProductData';
import styles from '../../styles/styles';

const SectionScreen = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);

  const discountedProducts = productData.filter(product => product.discount > 1).slice(0, 5);
  const recommendedProducts = productData.filter(product => product.recommended === true).slice(0, 5);
  const favoriteProducts = productData.filter(product => product.favorite === true).slice(0, 5); 
  const cardProducts = productData.filter(product => product.card === true).slice(0, 5);
  const freeShippingProducts = productData.filter(product => product.freeShipping === true).slice(0, 5);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} onFilterPress={() => setModalFilterVisible(true)} />
      <ScrollView>
        <SectionComponent 
          title="Productos en descuento" 
          products={discountedProducts} 
          navigation={navigation} 
          viewMoreRoute="discounted" 
        />
        <SectionComponent 
          title="Recomendados para ti" 
          products={recommendedProducts} 
          navigation={navigation} 
          viewMoreRoute="recommended" 
        />
        <SectionComponent 
          title="Tus productos en favoritos" 
          products={favoriteProducts} 
          navigation={navigation} 
          viewMoreRoute="favorites" 
        />
        <SectionComponent 
          title="Productos en tu carrito" 
          products={cardProducts} 
          navigation={navigation} 
          viewMoreRoute="cart" 
        />
        <SectionComponent 
          title="Productos con envio Gratis" 
          products={freeShippingProducts} 
          navigation={navigation} 
          viewMoreRoute="freeShipping" 
        />
      </ScrollView>

      <FilterModal modalVisible={modalFilterVisible} setModalVisible={setModalFilterVisible} />
    </SafeAreaView>
  );
}

export default SectionScreen;
