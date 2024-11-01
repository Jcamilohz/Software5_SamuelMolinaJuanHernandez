import React, { createContext, useContext, useReducer, useEffect } from 'react';
import firebase from '../firebase/firebase';
import { useUser } from './UserContext';

const initialState = {
  questions: [],
};

const QuestionContext = createContext(initialState);

const questionReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'ADD_QUESTION':
      return { ...state, questions: [...state.questions, action.payload] };
    default:
      return state;
  }
};

export const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getQuestions();
    } else {
      dispatch({ type: 'SET_QUESTIONS', payload: [] });
    }
  }, [user]);

  const getQuestions = async (productId) => {
    const questionSnapshot = await firebase.db
      .collection('question')
      .where('productId', '==', productId)
      .get();

    const questions = questionSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({ type: 'SET_QUESTIONS', payload: questions });
  };

  const addQuestion = async (productId, questionText) => {
    const newQuestion = {
      productId,
      personId: user.id,
      question: questionText,
      questionDate: new Date().toISOString(),
    };

    const questionRef = await firebase.db.collection('question').add(newQuestion);

    dispatch({
      type: 'ADD_QUESTION',
      payload: { id: questionRef.id, ...newQuestion },
    });
  };

  return (
    <QuestionContext.Provider value={{
      questions: state.questions,
      addQuestion,
      getQuestions,
    }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestion = () => useContext(QuestionContext);
