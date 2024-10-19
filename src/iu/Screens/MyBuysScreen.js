import React from 'react';
import { SafeAreaView, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useProduct } from '../../Context/ProductProvider'; 
import styles from '../../styles/styles';
import productPaidData from '../../data/ProductPaidData';
import Toast from 'react-native-toast-message';

const steps = ['Validando compra', 'En centro de distribución', 'En camino', 'Entregado'];

const MyBuysScreen = ({ navigation }) => {
  const { products } = useProduct(); 


  const getProductById = (productId) => products.find(product => product.id === productId);
  

  const paidProducts = productPaidData.filter(productPaid => productPaid.personId === 1)
    .map(productPaid => {
      const product = getProductById(productPaid.productId); 
      return { 
        ...product, 
        status: productPaid.status,
        currentStepIndex: steps.indexOf(productPaid.status),
      };
    });

  const handleCancelPurchase = (productName) => {
    Toast.show({
      type: 'success',
      text1: 'Compra cancelada',
      text2: `Has cancelado la compra del producto "${productName}".`,
      position: 'bottom',
    });
  };

  const handleReturnItem = (productName) => {
    Toast.show({
      type: 'success',
      text1: 'Artículo devuelto',
      text2: `Has devuelto el artículo "${productName}".`,
      position: 'bottom',
    });
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView style={styles.productListContainer1}>
        <Text style={styles.headerTitle1}>Compras Realizadas</Text>
        {paidProducts.length > 0 ? (
          paidProducts.map(product => (
            <View key={product.id} style={styles.productCardContainer1}>
              <Image source={product.image} style={styles.productImage1} resizeMode="contain" />
              
              <View style={styles.productInfoContainer1}>
                <Text style={styles.productName1}>{product.name}</Text>
                <Text style={styles.productPrice1}>Precio: ${product.discount > 0 ? product.discountPrice : product.price}</Text>

                <View style={styles.stepsContainer1}>
                  {steps.map((step, index) => (
                    <View key={index} style={styles.stepWrapper1}>
                      <View style={[
                        styles.stepCircle1, 
                        index <= product.currentStepIndex && styles.stepCircleActive1
                      ]} />
                      <Text style={[
                        styles.stepLabel1, 
                        index <= product.currentStepIndex && styles.stepLabelActive1
                      ]}>
                        {step}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              {product.status !== 'Entregado' ? (
                <Pressable 
                  style={styles.actionButton1}
                  onPress={() => handleCancelPurchase(product.name)}
                >
                  <Text style={styles.buttonText1}>Cancelar Compra</Text>
                </Pressable>
              ) : (
                <Pressable 
                  style={styles.actionButton1}
                  onPress={() => handleReturnItem(product.name)}
                >
                  <Text style={styles.buttonText1}>Devolver Artículo</Text>
                </Pressable>
              )}
            </View>
          ))
        ) : (
          <Text style={styles.noProductsText1}>No has realizado ninguna compra.</Text>
        )}
      </ScrollView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default MyBuysScreen;
