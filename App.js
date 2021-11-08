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

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
      {/* <AuthStack/> */}
    </NavigationContainer>
  )  
};