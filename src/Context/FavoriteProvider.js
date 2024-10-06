import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  favoriteItems: [],
};


const FavoritesContext = createContext(initialState);


const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};


export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addToFavorites = (product) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: product });
  };

  const removeFromFavorites = (productId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: productId });
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems: state.favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
