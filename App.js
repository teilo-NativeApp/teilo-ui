import React from "react";
import {
  Text
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// * STYLES IMPORT

// * COMPONENTS IMPORT
// import AuthStack from "./app/navigation/AuthStack";
import AppStack from "./app/navigation/AppStack";
import Login from "./app/screens/login/Login";
import { UserContextProvider } from "./app/context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        {/* <AppStack/> */}
        <Login/>
        {/* <AuthStack/> */}
      </NavigationContainer>
    </UserContextProvider>
  )  
};