import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../../styles/styles';
import ProductCard from '../Screens/ProductCardScreen'; 

const SectionComponent = ({ title, products, navigation, viewMoreRoute }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.text}>{title}</Text>
        <Pressable onPress={() => navigation.navigate(viewMoreRoute)}>
          <Text style={styles.textRed}>Ver Más</Text>
        </Pressable>
      </View>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
        />
      ))}
    </View>
  );
};

export default SectionComponent;
