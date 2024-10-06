import React, { createContext, useState, useContext } from 'react';
import personData from '../data/PersonData'; 

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    
    const foundUser = personData.find(
      (person) => person.userName === username && person.password === password
    );
    if (foundUser) {
      setUser(foundUser); 
      return true; 
    }
    return false; 
  };

  const logout = () => {
    setUser(null); 
  };

  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData })); 
  };

  const registerUser = (newUser) => {
    
    personData.push({
      id: personData.length + 1, 
      ...newUser,
    });
    setUser(newUser); 
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
