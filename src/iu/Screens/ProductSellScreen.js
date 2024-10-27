import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Pressable, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';
import styles from '../../styles/styles';
import Toast from 'react-native-toast-message';
import categoriesData from '../../data/CategoriesData';
import { useProduct } from '../../Context/ProductProvider';
import { useUser } from '../../Context/UserContext';
import firebase from '../../firebase/firebase';

const ProductSellScreen = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [shippingCost, setShippingCost] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([categoriesData[0]]);
    const [imageUri, setImageUri] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const { addProduct } = useProduct();
    const { user } = useUser();

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

    const uploadImageToStorage = async (uri) => {
        try {
            const response = await fetch(uri);
            const blob = await response.blob();
            
            const timestamp = Date.now();
            const fileName = `product_images/${timestamp}_${Math.random().toString(36).substr(2, 9)}`;
            
            const storageRef = firebase.storage.ref().child(fileName);
            await storageRef.put(blob);
            
            const downloadUrl = await storageRef.getDownloadURL();
            return downloadUrl;
        } catch (error) {
            console.error('Error al subir imagen:', error);
            throw error;
        }
    };

    const handleSelectImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const selectedImage = response.assets[0];
                setImageUri(selectedImage.uri);
                console.log('Selected image URI:', selectedImage.uri);
            }
        });
    };

    const handlePublishProduct = async () => {
        try {
            if (!productName || !price || !stock || !imageUri) {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Por favor completa todos los campos requeridos y selecciona una imagen',
                    position: 'bottom',
                });
                return;
            }

            setIsUploading(true);
            const imageUrl = await uploadImageToStorage(imageUri);
            
            const calculatedDiscountPrice = price - (price * (discount / 100));

            const newProduct = {
                name: productName,
                price: parseFloat(price) || 0,
                discountPrice: parseFloat(calculatedDiscountPrice) || 0,
                discount: parseFloat(discount) || 0,
                shippingCost: parseFloat(shippingCost) || 0,
                freeShipping: parseFloat(shippingCost) === 0,
                stock: parseInt(stock) || 0,
                categories: selectedCategories.filter(cat => cat),
                sellerId: user?.id || '',
                description: description || `${productName}\nPrecio: ${price}\nDescuento: ${discount}%\nCategorías: ${selectedCategories.join(', ')}`,
                image: imageUrl,
                createdAt: new Date().toISOString(),
                status: 'active',
            };

            console.log('Datos del producto antes de agregar:', JSON.stringify(newProduct, null, 2));
            for (const key in newProduct) {
                if (newProduct[key] === undefined) {
                    console.error(`El campo "${key}" tiene un valor 'undefined'.`);
                }
            }

            await addProduct(newProduct);

            Toast.show({
                type: 'success',
                text1: 'Producto Publicado',
                text2: `El producto "${productName}" ha sido publicado.`,
                position: 'bottom',
            });
            setProductName('');
            setPrice('');
            setDiscount('');
            setShippingCost('');
            setStock('');
            setDescription('');
            setSelectedCategories([categoriesData[0]]);
            setImageUri(null);

        } catch (error) {
            console.error('Error al publicar producto:', error);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'No se pudo publicar el producto. Por favor intenta de nuevo.',
                position: 'bottom',
            });
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <SafeAreaView style={styles.mainBackground}>
            <ScrollView>
                <View style={styles.containerPadding}>
                    <Text style={styles.headerTitle1}>Publicar Producto</Text>

                    <Text style={styles.label1}>Nombre del producto *</Text>
                    <TextInput
                        style={styles.input1}
                        placeholder="Ingresa el nombre del producto"
                        value={productName}
                        onChangeText={setProductName}
                    />

                    <Text style={styles.label1}>Precio *</Text>
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

                    <Text style={styles.label1}>Stock *</Text>
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

                            {selectedCategories.length > 1 && (
                                <Pressable style={styles.removeButton} onPress={() => handleRemoveCategory(index)}>
                                    <Text style={styles.removeButtonText}>Eliminar</Text>
                                </Pressable>
                            )}
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
                        value={description}
                        onChangeText={setDescription}
                    />

                    <Pressable 
                        style={[styles.actionButton1, isUploading && { opacity: 0.7 }]} 
                        onPress={handleSelectImage}
                        disabled={isUploading}
                    >
                        <Text style={styles.buttonText1}>Seleccionar Imagen</Text>
                    </Pressable>

                    {imageUri && (
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    )}

                    <Pressable 
                        style={[styles.actionButton1, isUploading && { opacity: 0.7 }]} 
                        onPress={handlePublishProduct}
                        disabled={isUploading}
                    >
                        <Text style={styles.buttonText1}>
                            {isUploading ? 'Subiendo...' : 'Publicar Producto'}
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
};

export default ProductSellScreen;