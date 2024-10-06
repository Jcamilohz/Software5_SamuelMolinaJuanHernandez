import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import ProductSellComponent from '../Componets/ProductSellComponent';
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

        setProductName('');
        setPrice('');
        setDiscount('');
        setShippingCost('');
        setStock(''); 
        setSelectedCategories([categoriesData[0]]);
    };

    return (
        <SafeAreaView style={styles.mainBackground}>
            <ProductSellComponent 
                productName={productName}
                price={price}
                discount={discount}
                shippingCost={shippingCost}
                stock={stock}
                selectedCategories={selectedCategories}
                setProductName={setProductName}
                setPrice={setPrice}
                setDiscount={setDiscount}
                setShippingCost={setShippingCost}
                setStock={setStock}
                handleAddCategory={handleAddCategory}
                handleCategoryChange={handleCategoryChange}
                handleRemoveCategory={handleRemoveCategory} 
                handlePublishProduct={handlePublishProduct}
                categories={categoriesData}
            />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
};

export default ProductSellScreen;
