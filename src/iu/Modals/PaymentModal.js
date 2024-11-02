import React, { useState } from 'react'; 
import { View, Text, Modal, TextInput, Pressable, Image, ScrollView } from 'react-native';
import styles from '../../styles/styles';
import { useUser } from '../../Context/UserContext';

const PaymentModal = ({ modalVisible, setModalVisible, onSubmit }) => {
    const { user } = useUser();
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ScrollView>
                        <Text style={styles.title}>Finalizar Compra</Text>
                        <Text style={styles.text}>Dirección de Entrega:</Text>
                        {user ? (
                            <>
                                <Text style={styles.text}>{user.address}</Text>
                                <Text style={styles.text}>{user.city}, {user.departament}</Text>
                                <Text style={styles.text}>{user.country}</Text>
                            </>
                        ) : (
                            <Text style={styles.text}>Información no disponible</Text>
                        )}

                        <Text style={styles.text}>Selecciona un método de pago:</Text>
                        <View style={styles.sectionHeader}>
                            <Pressable onPress={() => handlePaymentMethodChange('PSE')} style={styles.paymentOption}>
                                <Image source={require('../../Iconos/PSE.jpg')} style={styles.icon2} resizeMode="contain" />
                            </Pressable>
                            <Pressable onPress={() => handlePaymentMethodChange('MasterCard')} style={styles.paymentOption}>
                                <Image source={require('../../Iconos/MasterCard.png')} style={styles.icon2} resizeMode="contain" />
                            </Pressable>
                            <Pressable onPress={() => handlePaymentMethodChange('Visa')} style={styles.paymentOption}>
                                <Image source={require('../../Iconos/Visa.jpg')} style={styles.icon2} resizeMode="contain" />
                            </Pressable>
                            <Pressable onPress={() => handlePaymentMethodChange('Efecty')} style={styles.paymentOption}>
                                <Image source={require('../../Iconos/efecty.png')} style={styles.icon2} resizeMode="contain" />
                            </Pressable>
                        </View>

                        {paymentMethod === 'PSE' && (
                            <View>
                                <TextInput style={styles.input} placeholder="Banco" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Cuenta" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry placeholderTextColor="gray" />
                            </View>
                        )}

                        {paymentMethod === 'MasterCard' && (
                            <View>
                                <TextInput style={styles.input} placeholder="Número de Tarjeta" keyboardType="numeric" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Fecha de Expiración (MM/AA)" keyboardType="numeric" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" secureTextEntry placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Nombre en la Tarjeta" placeholderTextColor="gray" />
                            </View>
                        )}

                        {paymentMethod === 'Visa' && (
                            <View>
                                <TextInput style={styles.input} placeholder="Número de Tarjeta" keyboardType="numeric" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Fecha de Expiración (MM/AA)" keyboardType="numeric" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="CVV" keyboardType="numeric" secureTextEntry placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Nombre en la Tarjeta" placeholderTextColor="gray" />
                            </View>
                        )}

                        {paymentMethod === 'Efecty' && (
                            <View>
                                <TextInput style={styles.input} placeholder="Número de referencia o código de pago" keyboardType="numeric" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Monto a pagar" keyboardType="numeric" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Nombre completo" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Documento de identidad" placeholderTextColor="gray" />
                                <TextInput style={styles.input} placeholder="Teléfono de contacto (opcional)" keyboardType="phone-pad" placeholderTextColor="gray" />
                            </View>
                        )}
                    </ScrollView>
                    <Pressable style={styles.buttonGreen} onPress={() => { setModalVisible(false); onSubmit(); }}>
                        <Text style={styles.text}>Compra YA</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default PaymentModal;
