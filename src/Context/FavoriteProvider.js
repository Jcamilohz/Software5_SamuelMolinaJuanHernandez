import React, { createContext, useContext, useReducer, useEffect } from 'react';
import firebase from '../firebase/firebase';
import { useUser } from './UserContext';

const initialState = {
  favoriteItems: [],
};

const FavoritesContext = createContext(initialState);

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return {
        ...state,
        favoriteItems: action.payload,
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(item => item.favoriteId !== action.payload), 
      };
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getFavorites();
    } else {
      dispatch({ type: 'SET_FAVORITES', payload: [] });
    }
  }, [user]);

  const getFavorites = async () => {
    const favoritesSnapshot = await firebase.db
      .collection('favorites')
      .where('userId', '==', user?.id)
      .get();

    const favoritePromises = favoritesSnapshot.docs.map(async (doc) => {
      const favoriteData = doc.data();
      const productDoc = await firebase.db
        .collection('product')
        .doc(favoriteData.productId)
        .get();
      
      if (productDoc.exists) {
        return {
          id: doc.id,
          ...productDoc.data(),
          favoriteId: doc.id 
        };
      }
      return null;
    });

    const favoriteItems = (await Promise.all(favoritePromises)).filter(item => item !== null);
    dispatch({ type: 'SET_FAVORITES', payload: favoriteItems });
  };

  const addToFavorites = async (product) => {
    const favoriteRef = await firebase.db.collection('favorites').add({
      userId: user.id,
      productId: product.id,
      addedAt: new Date().toISOString(),
    });

    dispatch({type: 'ADD_TO_FAVORITES',payload: {...product,favoriteId: favoriteRef.id},
    });
  };

  const removeFromFavorites = async (favoriteId) => {    
        await firebase.db.collection('favorites').doc(favoriteId).delete();
        dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: favoriteId });
};

  return (
    <FavoritesContext.Provider value={{
      favoriteItems: state.favoriteItems,
      addToFavorites,
      removeFromFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);

export default FavoritesProvider;
