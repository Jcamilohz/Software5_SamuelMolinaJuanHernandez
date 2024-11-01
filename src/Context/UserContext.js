import React, { createContext, useReducer, useContext, useEffect } from 'react';
import firebase from '../firebase/firebase';

const initialState = {
  user: null,
  users: [],
};

const SET_USER = 'SET_USER';
const SET_USERS = 'SET_USERS';
const LOGOUT = 'LOGOUT';
const UPDATE_USER = 'UPDATE_USER';

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsers = async () => {
    const querySnapshot = await firebase.db.collection('user').get();

    const usersData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    dispatch({ type: SET_USERS, payload: usersData });
    return usersData;
  };

  useEffect(() => {
    getUsers();
  }, []);

  const uploadImageToStorage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    
    const timestamp = Date.now();
    const fileName = `profile_images/${timestamp}_${Math.random().toString(36).substr(2, 9)}`;
    
    const storageRef = firebase.storage.ref().child(fileName);
    await storageRef.put(blob);
    
    const downloadUrl = await storageRef.getDownloadURL();
    return downloadUrl;
  };

  const login = async (username, password) => {
    const userQuery = await firebase.db.collection('user')
      .where('userName', '==', username)
      .get();

    if (userQuery.empty) {
      return false;
    }

    const userDoc = userQuery.docs[0];
    const userData = userDoc.data();

    if (userData.password === password) {
      const userWithId = {
        id: userDoc.id,
        ...userData
      };
      dispatch({ type: SET_USER, payload: userWithId });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const updateUser = async (updatedData) => {
    if (!state.user?.id) return;

    await firebase.db.collection('user')
      .doc(state.user.id)
      .update(updatedData);

    const updatedUser = { ...state.user, ...updatedData };
    dispatch({ type: UPDATE_USER, payload: updatedUser });

    await getUsers();
    return true;
  };

  const registerUser = async (newUser) => {

    const userNameQuery = await firebase.db.collection('user')
      .where('userName', '==', newUser.userName)
      .get();

    if (!userNameQuery.empty) {
      throw new Error('El nombre de usuario ya existe');
    }

    const emailQuery = await firebase.db.collection('user')
      .where('mail', '==', newUser.mail)
      .get();

    if (!emailQuery.empty) {
      throw new Error('El correo electrónico ya está registrado');
    }


    let imageProfile = '';
    if (newUser.imageProfile) {
      imageProfile = await uploadImageToStorage(newUser.imageProfile);
    }

    const newUserRef = await firebase.db.collection('user').doc();
    const userData = {
      ...newUser,
      imageProfile,
      createdAt: new Date().toISOString(),
      id: newUserRef.id
    };

    Object.keys(userData).forEach(key => 
      userData[key] === undefined && delete userData[key]
    );

    await newUserRef.set(userData);

    dispatch({ type: SET_USER, payload: userData });

 
    await getUsers();

    return true;
  };

  return (
    <UserContext.Provider value={{
      user: state.user,
      users: state.users,
      getUsers,
      login,
      logout,
      updateUser,
      registerUser,
      uploadImageToStorage
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
