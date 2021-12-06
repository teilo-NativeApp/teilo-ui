import React, { useState } from "react";
import Router from "./app/components/router/Router";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// * CONTEXT IMPORT
import { AuthContextProvider } from "./app/context/AuthContext";
import { GroupContextProvider } from "./app/context/GroupContext";

// * COMPONENTS IMPORT


// * STYLES IMPORT


const getFonts = () => Font.loadAsync({
    "Syne-Regular":require('./app/assets/fonts/Syne-Regular.otf')
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <AuthContextProvider>
        <GroupContextProvider>
          <Router/>
        </GroupContextProvider>
      </AuthContextProvider>
    )  
  } else {
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
};