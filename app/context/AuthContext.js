import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../hooks/apiCalls';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [authData, setAuthData] = useState({});
  const [newUser, setNewUser] = useState({})
  const [loading, setLoading] = useState(true);

  // * CHECK STORAGE FOR USER

  useEffect( () => {
    retrieveUserSession();
  }, []);

  const retrieveUserSession = async () => {
    try {   
      const session = await SecureStore.getItemAsync("user_session");
      if (session !== undefined) {
        const authData = JSON.parse(session);
        setAuthData(authData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // * LOGIN & SIGNUP USER

  const logIn = async (data) => {
    const authData = await loginUser(data);
    setAuthData(authData);
    try {
      await SecureStore.setItemAsync(
        "user_session",
        JSON.stringify(authData)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    setAuthData(undefined);
    try {
      await SecureStore.deleteItemAsync("user_session");
    } catch (error) {
      console.log(error);
    }
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


