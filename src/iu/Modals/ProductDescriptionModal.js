import React from 'react';
import { View, Text, Modal } from 'react-native';
import styles from '../../styles/styles';

const ProductDescriptionModal = ({ modalVisible, setModalVisible, product }) => {
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
          <Text style={styles.text}>Descripción del producto</Text>
          {product?.description?.trademark && <Text style={styles.text}>Marca: {product.description.trademark}</Text>}
          {product?.description?.storageSpace && <Text style={styles.text}>Espacio de Almacenamiento: {product.description.storageSpace}</Text>}
          {product?.description?.storageType && <Text style={styles.text}>Tipo de Almacenamiento: {product.description.storageType}</Text>}
          {product?.description?.ramMemory && <Text style={styles.text}>Memoria RAM: {product.description.ramMemory}</Text>}
          {product?.description?.color && <Text style={styles.text}>Color: {product.description.color}</Text>}
          {product?.description?.state && <Text style={styles.text}>Estado: {product.description.state}</Text>}
          {product?.description?.computerProcessor && <Text style={styles.text}>Procesador: {product.description.computerProcessor}</Text>}
          {product?.description?.graphicCard && <Text style={styles.text}>Tarjeta Gráfica: {product.description.graphicCard}</Text>}
          {product?.description?.size && <Text style={styles.text}>Tamaño: {product.description.size}</Text>}
        </View>
      </View>
    </Modal>
  );
};

export default ProductDescriptionModal;