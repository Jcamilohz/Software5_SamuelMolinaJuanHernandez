import React from 'react'; 
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import styles from '../../styles/styles';

const ProductSellComponent = ({
    productName,
    price,
    discount,
    shippingCost,
    stock,
    selectedCategories,
    setProductName,
    setPrice,
    setDiscount,
    setShippingCost,
    setStock,
    handleAddCategory,
    handleCategoryChange,
    handleRemoveCategory, 
    handlePublishProduct,
    categories
}) => {

    return (
        <ScrollView>
            <View style={styles.containerPadding}>
                <Text style={styles.headerTitle1}>Publicar Producto</Text>

                <Text style={styles.label1}>Nombre del producto</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Ingresa el nombre del producto"
                    value={productName}
                    onChangeText={setProductName}
                />

                <Text style={styles.label1}>Precio</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Ingresa el precio"
                    keyboardType="numeric"
                    value={price}
                    onChangeText={setPrice}
                />

                <Text style={styles.label1}>Descuento (%)</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Ingresa el descuento"
                    keyboardType="numeric"
                    value={discount}
                    onChangeText={setDiscount}
                />

                <Text style={styles.label1}>Costo de Envío</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Ingresa el costo de envío"
                    keyboardType="numeric"
                    value={shippingCost}
                    onChangeText={setShippingCost}
                />

                <Text style={styles.label1}>Stock</Text>
                <TextInput
                    style={styles.input1}
                    placeholder="Ingresa la cantidad de stock"
                    keyboardType="numeric"
                    value={stock}
                    onChangeText={setStock}
                />

                <Text style={styles.label1}>Categorías</Text>
                {selectedCategories.map((selectedCategory, index) => (
                    <View key={index} style={styles.pickerWrapper}>
                        <Picker
                            selectedValue={selectedCategory}
                            style={styles.picker1}
                            onValueChange={(itemValue) => handleCategoryChange(itemValue, index)}
                        >
                            {categories.map((category, categoryIndex) => (
                                <Picker.Item key={categoryIndex} label={category} value={category} />
                            ))}
                        </Picker>

                       
                        <Pressable style={styles.removeButton} onPress={() => handleRemoveCategory(index)}>
                            <Text style={styles.removeButtonText}>Eliminar</Text>
                        </Pressable>
                    </View>
                ))}

                <Pressable style={styles.addButton} onPress={handleAddCategory}>
                    <Text style={styles.addButtonText}>Añadir Categoría</Text>
                </Pressable>

                <Text style={styles.label1}>Descripción</Text>
                <TextInput
                    style={styles.descriptionInput1}
                    placeholder="Describe el producto"
                    multiline
                    numberOfLines={4}
                />

                <Pressable style={styles.actionButton1} onPress={handlePublishProduct}>
                    <Text style={styles.buttonText1}>Publicar Producto</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default ProductSellComponent;
