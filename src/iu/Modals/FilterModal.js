import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/styles';
import CategoriesData from '../../data/CategoriesData';

const FilterModal = ({ modalVisible, setModalVisible }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [onlyDiscount, setOnlyDiscount] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);

  const handleAddCategory = () => {
    setSelectedCategories([...selectedCategories, CategoriesData[0]]);
  };

  const handleCategoryChange = (value, index) => {
    const updatedCategories = [...selectedCategories];
    updatedCategories[index] = value;
    setSelectedCategories(updatedCategories);
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = selectedCategories.filter((_, i) => i !== index);
    setSelectedCategories(updatedCategories);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setMinPrice('');
    setMaxPrice('');
    setOnlyDiscount(false);
    setFreeShipping(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalBackgroundmfp}>
        <View style={styles.modalContainermfp}>
          <Text style={styles.modalTitlemfp}>Filtrar Opciones</Text>

          <ScrollView contentContainerStyle={styles.scrollContentContainer}>
            <Text style={styles.modalDescriptionTextmfp}>Selecciona Categorías</Text>
            {selectedCategories.length > 0 ? (
              selectedCategories.map((selectedCategory, index) => (
                <View key={index} style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={selectedCategory}
                    style={styles.picker}
                    onValueChange={(itemValue) => handleCategoryChange(itemValue, index)}
                  >
                    {CategoriesData.map((category, categoryIndex) => (
                      <Picker.Item key={categoryIndex} label={category} value={category} />
                    ))}
                  </Picker>
                  <Pressable
                    style={styles.removeButton}
                    onPress={() => handleRemoveCategory(index)}
                  >
                    <Text style={styles.removeButtonText}>Eliminar</Text>
                  </Pressable>
                </View>
              ))
            ) : (
              <Text style={styles.modalDescriptionTextmfp}>No hay categorías seleccionadas.</Text>
            )}

            <Pressable style={styles.addButton} onPress={handleAddCategory}>
              <Text style={styles.addButtonText}>Añadir otra Categoría</Text>
            </Pressable>

            <Text style={styles.modalDescriptionTextmfp}>Rango de Precio</Text>
            <Text style={styles.label}>Precio Mínimo</Text>
            <TextInput
              style={styles.modalInputmfp}
              placeholder="Precio mínimo"
              keyboardType="numeric"
              value={minPrice}
              onChangeText={setMinPrice}
            />
            <Text style={styles.label}>Precio Máximo</Text>
            <TextInput
              style={styles.modalInputmfp}
              placeholder="Precio máximo"
              keyboardType="numeric"
              value={maxPrice}
              onChangeText={setMaxPrice}
            />

            <View style={styles.filterOption}>
              <Pressable onPress={() => setOnlyDiscount(!onlyDiscount)}>
                <Text style={styles.filterOptionText}>
                  {onlyDiscount ? '✔' : '○'} Solo productos con descuento
                </Text>
              </Pressable>
            </View>

            <View style={styles.filterOption}>
              <Pressable onPress={() => setFreeShipping(!freeShipping)}>
                <Text style={styles.filterOptionText}>
                  {freeShipping ? '✔' : '○'} Solo productos con envío gratis
                </Text>
              </Pressable>
            </View>
          </ScrollView>

          <View style={styles.buttonContainer1}>
            <Pressable style={styles.modalButtonmfp1} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonTextmfp1}>Aplicar Filtros</Text>
            </Pressable>
            <Pressable style={styles.modalResetButtonmfp1} onPress={resetFilters}>
              <Text style={styles.modalResetButtonTextmfp1}>Eliminar Filtros</Text>
            </Pressable>
          </View>

          <Pressable style={styles.modalCloseButtonmfp} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalCloseButtonTextmfp}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
