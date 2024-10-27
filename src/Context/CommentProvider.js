import React, { createContext, useContext, useReducer, useEffect } from 'react';
import firebase from '../firebase/firebase';
import { useUser } from './UserContext';

const initialState = {
  comments: [],
};

const CommentContext = createContext(initialState);

const commentReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return {
        ...state,
        comments: action.payload,
      };
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};

export const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, initialState);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      getComments();
    } else {
      dispatch({ type: 'SET_COMMENTS', payload: [] });
    }
  }, [user]);

  const getComments = async (productId) => {
    try {
      const commentSnapshot = await firebase.db
        .collection('comment')
        .where('productId', '==', productId)
        .get();

      const comments = commentSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatch({ type: 'SET_COMMENTS', payload: comments });
    } catch (error) {
      console.error('Error al obtener comentarios:', error);
    }
  };

  const addComment = async (productId, comment, score) => {
    if (!user) {
      console.error('Debes estar autenticado para agregar comentarios');
      return;
    }

    try {
      const newComment = {
        productId,
        personId: user.id,
        comment,
        score,
        commentDate: new Date().toISOString(),
      };

      const commentRef = await firebase.db.collection('comment').add(newComment);

      dispatch({
        type: 'ADD_COMMENT',
        payload: { id: commentRef.id, ...newComment },
      });
    } catch (error) {
      console.error('Error al agregar comentario:', error);
    }
  };

  return (
    <CommentContext.Provider value={{
      comments: state.comments,
      addComment,
      getComments,
    }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComment = () => useContext(CommentContext);
