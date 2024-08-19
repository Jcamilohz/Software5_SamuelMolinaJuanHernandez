import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import FilterModal from './Modals/FilterModal';
import styles from '../styles/styles';

const Home = ({ navigation }) => {
  const [modalFilterVisible, setModalFilterVisible] = useState(false);

  return (
    <SafeAreaView style={styles.mainBackground}>
      <Header navigation={navigation} onFilterPress={() => setModalFilterVisible(true)} />
      <View style={styles.productList}>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: 1 })}>
          <Text style={styles.productItem}>Producto  1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: 2 })}>
          <Text style={styles.productItem}>Producto  2</Text>
        </TouchableOpacity>

      </View>

      <FilterModal modalVisible={modalFilterVisible} setModalVisible={setModalFilterVisible} />
    </SafeAreaView>
  );
}

export default Home;



