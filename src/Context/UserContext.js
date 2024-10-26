import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from '../firebase/firebase';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const querySnapshot = await firebase.db.collection('user').get();

      const usersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setUsers(usersData);
      console.log('Usuarios obtenidos:', usersData);
      return usersData;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const login = async (username, password) => {
    try {
      console.log('Intentando login con:', { username, password });
  
      const userQuery = await firebase.db.collection('user')
        .where('userName', '==', username)
        .get();
  
      console.log('Resultado de búsqueda:', {
        empty: userQuery.empty,
        size: userQuery.size
      });
  
      if (userQuery.empty) {
        console.log('Usuario no encontrado');
        return false;
      }
  
      const userDoc = userQuery.docs[0];
      const userData = userDoc.data();
  
      console.log('Usuario encontrado:', userData);
  
      if (userData.password === password) {
        const userWithId = {
          id: userDoc.id,
          ...userData
        };
        setUser(userWithId);
        console.log('Login exitoso:', userWithId);
        return true;
      } else {
        console.log('Contraseña incorrecta');
        return false;
      }
  
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return false;
    }
  };
  const logout = () => {
    setUser(null);
  };

  const updateUser = async (updatedData) => {
    try {
      if (!user?.id) return;

      await firebase.db.collection('user')
        .doc(user.id)
        .update(updatedData);

      setUser(prev => ({ ...prev, ...updatedData }));

      await getUsers();
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  };

  const registerUser = async (newUser) => {
    try {
      const querySnapshot = await firebase.db.collection('user')
        .where('userName', '==', newUser.userName)
        .get();

      if (!querySnapshot.empty) {
        throw new Error('El nombre de usuario ya existe');
      }

      const newUserRef = await firebase.db.collection('user').doc();
      const userData = {
        ...newUser,
        createdAt: new Date().toISOString(),
        id: newUserRef.id
      };

      await newUserRef.set(userData);
      setUser(userData);

      await getUsers();
      return true;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  };

  return (
    <UserContext.Provider value={{
      user,
      users,
      getUsers,
      login,
      logout,
      updateUser,
      registerUser
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;