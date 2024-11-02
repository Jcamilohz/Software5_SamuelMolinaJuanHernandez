import React, { createContext, useContext, useReducer, useEffect } from 'react';
import firebase from '../firebase/firebase';
import { useUser } from './UserContext';

const initialState = {
  cartItems: [],
};

const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cartItems: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.cartId !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getCartItems();
    } else {
      dispatch({ type: 'SET_CART', payload: [] });
    }
  }, [user]);

  const getCartItems = async () => {
    const cartSnapshot = await firebase.db
      .collection('cart')
      .where('userId', '==', user?.id)
      .get();

    const cartPromises = cartSnapshot.docs.map(async (doc) => {
      const cartData = doc.data();
      const productDoc = await firebase.db
        .collection('product')
        .doc(cartData.productId)
        .get();
      
      if (productDoc.exists) {
        return {
          id: doc.id,
          ...productDoc.data(),
          cartId: doc.id, 
          quantity: cartData.quantity || 1,
        };
      }
      return null;
    });

    const cartItems = (await Promise.all(cartPromises)).filter(item => item !== null);
    dispatch({ type: 'SET_CART', payload: cartItems });
  };

  const addToCart = async (product, quantity = 1) => {
    const cartRef = await firebase.db.collection('cart').add({
      userId: user.id,
      productId: product.id,
      quantity,
      addedAt: new Date().toISOString(),
    });

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        cartId: cartRef.id,
        quantity,
      },
    });
  };

  const removeFromCart = async (cartId) => {
      await firebase.db.collection('cart').doc(cartId).delete();
      dispatch({ type: 'REMOVE_FROM_CART', payload: cartId });
  };

  const clearCart = async () => {
    const cartSnapshot = await firebase.db
      .collection('cart')
      .where('userId', '==', user?.id)
      .get();

    const batch = firebase.db.batch();
    cartSnapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });

    await batch.commit();
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
