import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  productId: null,
};


const SET_PRODUCT_ID = 'SET_PRODUCT_ID';


const productIdReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT_ID:
      return {
        ...state,
        productId: action.payload,
      };
    default:
      return state;
  }
};


const ProductIdContext = createContext();


export const ProductIdProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productIdReducer, initialState);


  const setProductId = (id) => {
    dispatch({ type: SET_PRODUCT_ID, payload: id });
  };

  return (
    <ProductIdContext.Provider value={{ productId: state.productId, setProductId }}>
      {children}
    </ProductIdContext.Provider>
  );
};

export const useProductId = () => {
  return useContext(ProductIdContext);
};
