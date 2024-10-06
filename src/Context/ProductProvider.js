import React, { createContext, useReducer, useContext, useEffect } from 'react';
import productData from '../data/ProductData'; 

const initialState = {
  productId: null,
  products: productData,
  filteredProducts: [], 
  currentProduct: null,
};

const SET_PRODUCT_ID = 'SET_PRODUCT_ID';
const SET_PRODUCTS = 'SET_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
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
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setProductId = (id) => {
    dispatch({ type: SET_PRODUCT_ID, payload: id });
  };

  const setProducts = (products) => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  };

  const filterProducts = (query) => {
    dispatch({ type: FILTER_PRODUCTS, payload: query });
  };

  const setCurrentProduct = (id) => {
    dispatch({ type: SET_CURRENT_PRODUCT, payload: id });
  };

  const addProduct = (newProduct) => {
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
  };

  return (
    <ProductContext.Provider value={{
      productId: state.productId,
      products: state.products,
      filteredProducts: state.filteredProducts,
      currentProduct: state.currentProduct,
      setProductId,
      setProducts,
      filterProducts,
      setCurrentProduct,
      addProduct,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
