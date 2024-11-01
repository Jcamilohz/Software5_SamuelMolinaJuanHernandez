import React, { createContext, useReducer, useContext, useEffect } from 'react';
import firebase from '../firebase/firebase';

const initialState = {
  productId: null,
  products: [],
  filteredProducts: [],
  currentProduct: null,
  
};

const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_PRODUCTS = 'SET_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return { ...state, productId: action.payload };
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(product =>
          product.name.toLowerCase().includes(action.payload.toLowerCase()) || 
          product.categories.some(category => category.toLowerCase().includes(action.payload.toLowerCase()))
        ),
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: state.products.find(product => product.id === action.payload),
      };
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    const querySnapshot = await firebase.db.collection('product').get();
    const productsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    dispatch({ type: SET_PRODUCTS, payload: productsData });
    return productsData;
  };

  useEffect(() => {
    getProducts();
  }, []);

  const setProductId = (id) => {
    dispatch({ type: SET_PRODUCT_ID, payload: id });
  };

  const filterProducts = (query) => {
    dispatch({ type: FILTER_PRODUCTS, payload: query });
  };

  const setCurrentProduct = (id) => {
    dispatch({ type: SET_CURRENT_PRODUCT, payload: id });
  };

  const addProduct = async (newProduct) => {
    const newProductRef = await firebase.db.collection('product').doc();
    const productData = {
      ...newProduct,
      createdAt: new Date().toISOString(),
      id: newProductRef.id
    };
    await newProductRef.set(productData);
    dispatch({ type: ADD_PRODUCT, payload: productData });
    await getProducts();
    return true;
  };

  const updateProduct = async (productId, updatedData) => {
    await firebase.db.collection('product').doc(productId).update(updatedData);
    const updatedProduct = { id: productId, ...updatedData };
    dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct });
    await getProducts();
    return true;
  };

  const deleteProduct = async (productId) => {
    await firebase.db.collection('product').doc(productId).delete();
    dispatch({ type: DELETE_PRODUCT, payload: productId });
    await getProducts();
    return true;
  };

  return (
    <ProductContext.Provider value={{
      productId: state.productId,
      products: state.products,
      filteredProducts: state.filteredProducts,
      currentProduct: state.currentProduct,
      setProductId,
      filterProducts,
      setCurrentProduct,
      addProduct,
      updateProduct,
      deleteProduct,
      getProducts
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

export default ProductProvider;
