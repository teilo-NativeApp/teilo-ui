import React, { createContext, useState, useContext } from 'react';
import { loginUser } from '../hooks/apiCalls';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [authData, setAuthData] = useState({});
  const [newUser, setNewUser] = useState({})
  const [loading, setLoading] = useState(true);

  const logIn = async (data) => {
    const authData = await loginUser(data);
    setAuthData(authData);
  };

  const signOut = async () => {
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuthData, loading, logIn, signOut, newUser, setNewUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};


