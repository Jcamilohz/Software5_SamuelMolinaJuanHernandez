import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { useProduct } from '../../Context/ProductProvider';
import { useUser } from '../../Context/UserContext';
import { usePurchase } from '../../Context/ProductPaidProvider';
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';

const steps = ['Validando compra', 'En centro de distribución', 'En camino', 'Entregado'];

const MyBuysScreen = ({ navigation }) => {
  const { products } = useProduct();
  const { user } = useUser();
  const { purchases, getPurchases, deletePurchase } = usePurchase();

  useEffect(() => {
    if (user) {
      getPurchases();
    }
  }, [user]);

  const getProductById = (productId) => products.find(product => product.id === productId);

  const userPurchases = purchases
    .filter(purchase => purchase.personId === user?.id)
    .map(purchase => {
      const product = getProductById(purchase.productId);
      return {
        ...product,
        id: purchase.id, 
        status: purchase.status,
        currentStepIndex: steps.indexOf(purchase.status),
      };
    });

  const handleCancelPurchase = async (product) => {
    try {
      await deletePurchase(product.id);
      Toast.show({
        type: 'success',
        text1: 'Compra cancelada',
        text2: `Has cancelado la compra del producto "${product.name}".`,
        position: 'bottom',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo cancelar la compra. Intenta nuevamente.',
        position: 'bottom',
      });
    }
  };

  const handleReturnItem = async (product) => {
    try {
      await deletePurchase(product.id);
      Toast.show({
        type: 'success',
        text1: 'Artículo devuelto',
        text2: `Has devuelto el artículo "${product.name}".`,
        position: 'bottom',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo procesar la devolución. Intenta nuevamente.',
        position: 'bottom',
      });
    }
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView style={styles.productListContainer1}>
        <Text style={styles.headerTitle1}>Compras Realizadas</Text>
        {userPurchases.length > 0 ? (
          userPurchases.map(product => (
            <View key={product.id} style={styles.productCardContainer1}>
              <Image source={{ uri: product.image }} style={styles.productImage1} resizeMode="contain" />
              <View style={styles.productInfoContainer1}>
                <Text style={styles.productName1}>{product.name}</Text>
                <Text style={styles.text}>Precio: ${product.discount > 0 ? product.discountPrice : product.price}</Text>
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
                  onPress={() => handleCancelPurchase(product)}
                >
                  <Text style={styles.buttonText1}>Cancelar Compra</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles.actionButton1}
                  onPress={() => handleReturnItem(product)}
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
    </SafeAreaView>
  );
};

export default MyBuysScreen;
