import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';
import categoriesData from '../../data/CategoriesData';
import { useProduct } from '../../Context/ProductProvider'; 

const ProductSellScreen = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [shippingCost, setShippingCost] = useState('');
    const [stock, setStock] = useState(''); 
    const [selectedCategories, setSelectedCategories] = useState([categoriesData[0]]);
    const { addProduct } = useProduct(); 

    const handleAddCategory = () => {
        setSelectedCategories([...selectedCategories, categoriesData[0]]);
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

    const handlePublishProduct = () => {
        const calculatedDiscountPrice = price - (price * (discount / 100));

        const newProduct = {
            id: Math.random().toString(36).substr(2, 9),
            name: productName,
            price: parseFloat(price),
            discountPrice: parseFloat(calculatedDiscountPrice),
            discount: parseFloat(discount),
            shippingCost: parseFloat(shippingCost),
            image: require('../../Iconos/ImagenProducto.jpg'), 
            freeShipping: parseFloat(shippingCost) === 0,
            stock: parseInt(stock),
            categories: selectedCategories.map(cat => cat.name),
            sellerId: 1, 
            description: `${productName}\nPrecio: ${price}\nDescuento: ${discount}%\nCategorías: ${selectedCategories.map(cat => cat.name).join(', ')}`,
        };

        addProduct(newProduct);

        Toast.show({
            type: 'success',
            text1: 'Producto Publicado',
            text2: `El producto "${productName}" ha sido publicado.`,
            position: 'bottom',
        });

        // Limpiar el formulario
        setProductName('');
        setPrice('');
        setDiscount('');
        setShippingCost('');
        setStock(''); 
        setSelectedCategories([categoriesData[0]]);
    };

    return (
        <SafeAreaView style={styles.mainBackground}>
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
                                {categoriesData.map((category, categoryIndex) => (
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
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
};

export default ProductSellScreen;
