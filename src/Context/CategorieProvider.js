import React, { createContext, useReducer, useContext, useEffect } from 'react';
import firebase from '../firebase/firebase';

const initialState = {
  categories: [],
};

const SET_CATEGORIES = 'SET_CATEGORIES';

const categoryReducer = (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  const getCategories = async () => {
    try {
      const querySnapshot = await firebase.db.collection('categorie').get();
      const categoriesData = querySnapshot.docs.map(doc => doc.data().name); 
      dispatch({ type: SET_CATEGORIES, payload: categoriesData });
    } catch (error) {
      console.error('Error al obtener categorías:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{
      categories: state.categories,
      getCategories
    }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
