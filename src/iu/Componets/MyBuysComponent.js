import React from 'react'; 
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import styles from '../../styles/styles';

const MyBuysComponent = ({ paidProducts, steps, onCancelPurchase, onReturnItem }) => {
  return (
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
                onPress={() => onCancelPurchase(product.name)}
              >
                <Text style={styles.buttonText1}>Cancelar Compra</Text>
              </Pressable>
            ) : (
              <Pressable 
                style={styles.actionButton1}
                onPress={() => onReturnItem(product.name)}
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
  );
};

export default MyBuysComponent;
