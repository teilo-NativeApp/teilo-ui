import React from "react";
import Router from "./app/components/router/Router";

// * CONTEXT IMPORT
import { AuthContextProvider } from "./app/context/AuthContext";

// * STYLES IMPORT

// * COMPONENTS IMPORT

export default function App() {
  return (
    <AuthContextProvider>
      <Router/>
    </AuthContextProvider>
  )  
};