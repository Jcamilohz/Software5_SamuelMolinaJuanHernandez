import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from '../../styles/styles';
import ProductSellComponent from '../Componets/ProductSellComponent';
import Toast from 'react-native-toast-message';
import categoriesData from '../../data/CategoriesData';

const ProductSellScreen = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [shippingCost, setShippingCost] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([categoriesData[0]]);

    const handleAddCategory = () => {
        setSelectedCategories([...selectedCategories, categoriesData[0]]);
    };

    const handleCategoryChange = (value, index) => {
        const updatedCategories = [...selectedCategories];
        updatedCategories[index] = value;
        setSelectedCategories(updatedCategories);
    };

    const handlePublishProduct = () => {
        Toast.show({
            type: 'success',
            text1: 'Producto Publicado',
            text2: `El producto "${productName}" ha sido publicado en las categorías "${selectedCategories.join(', ')}".`,
            position: 'bottom',
        });

        setProductName('');
        setPrice('');
        setDiscount('');
        setShippingCost('');
        setSelectedCategories([categoriesData[0]]);
    };

    return (
        <SafeAreaView style={styles.mainBackground}>
            <ProductSellComponent 
                productName={productName}
                price={price}
                discount={discount}
                shippingCost={shippingCost}
                selectedCategories={selectedCategories}
                setProductName={setProductName}
                setPrice={setPrice}
                setDiscount={setDiscount}
                setShippingCost={setShippingCost}
                handleAddCategory={handleAddCategory}
                handleCategoryChange={handleCategoryChange}
                handlePublishProduct={handlePublishProduct}
                categories={categoriesData}
            />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
};

export default ProductSellScreen;
