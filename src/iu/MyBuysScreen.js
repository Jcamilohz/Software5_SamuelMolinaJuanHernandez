import React from "react";
import { SafeAreaView, View, Text, ScrollView, Pressable } from 'react-native';
import styles from '../styles/styles';
import { getPaidProductsByPersonId } from '../controller/ProductPaidController';

const MyBuysScreen = ({ navigation }) => {
    const paidProducts = getPaidProductsByPersonId(1);

    return (
        <SafeAreaView style={styles.mainBackground}>
            <View style={styles.container5}>
                <Text style={styles.text}>Compras hechas o ver su recorrido</Text>
                <ScrollView>
                    {paidProducts.length > 0 ? (
                        paidProducts.map(product => (
                            <View key={product.id} style={styles.productContainer}>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.text}>Precio: ${product.discount > 0 ? product.discountPrice : product.price}</Text>
                                <Text style={styles.text}>Estado: {product.status}</Text>

                                {product.status !== 'Entregado' ? (
                                    <Pressable style={styles.button}>
                                        <Text style={styles.text}>Cancelar Compra</Text>
                                    </Pressable>
                                ) : (
                                    <Pressable style={styles.button}>
                                        <Text style={styles.text}>Devolver Artículo</Text>
                                    </Pressable>
                                )}
                            </View>
                        ))
                    ) : (
                        <Text style={styles.text}>No has realizado ninguna compra.</Text>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default MyBuysScreen;
