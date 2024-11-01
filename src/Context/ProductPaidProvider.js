import React, { createContext, useReducer, useContext } from 'react';
import firebase from '../firebase/firebase';

const initialState = {
  purchases: [],
};

const SET_PURCHASES = 'SET_PURCHASES';
const ADD_PURCHASE = 'ADD_PURCHASE';
const DELETE_PURCHASE = 'DELETE_PURCHASE';

const purchaseReducer = (state, action) => {
  switch (action.type) {
    case SET_PURCHASES:
      return { ...state, purchases: action.payload };
    case ADD_PURCHASE:
      return { ...state, purchases: [...state.purchases, action.payload] };
    case DELETE_PURCHASE:
      return {
        ...state,
        purchases: state.purchases.filter(purchase => purchase.id !== action.payload),
      };
    default:
      return state;
  }
};

const PurchaseContext = createContext();

export const PurchaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(purchaseReducer, initialState);

  const getPurchases = async () => {
    const purchaseSnapshot = await firebase.db.collection('productPaid').get();
    const purchasesData = purchaseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({ type: SET_PURCHASES, payload: purchasesData });
    return purchasesData;
  };

  const addPurchase = async (personId, productId, quantity, status = 'En proceso') => {
    const newPurchase = { personId, productId, quantity, status, purchaseDate: new Date().toISOString() };
    const purchaseRef = await firebase.db.collection('productPaid').add(newPurchase);
    dispatch({ type: ADD_PURCHASE, payload: { id: purchaseRef.id, ...newPurchase } });
  };

  const deletePurchase = async (purchaseId) => {
    await firebase.db.collection('productPaid').doc(purchaseId).delete();
    dispatch({ type: DELETE_PURCHASE, payload: purchaseId });
  };

  return (
    <PurchaseContext.Provider value={{
      purchases: state.purchases,
      getPurchases,
      addPurchase,
      deletePurchase,
    }}>
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchase = () => useContext(PurchaseContext);

export default PurchaseProvider;
