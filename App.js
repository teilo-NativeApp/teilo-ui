import React from "react";
import Router from "./app/components/router/Router";

// * CONTEXT IMPORT
import { AuthContextProvider } from "./app/context/AuthContext";
import { GroupContextProvider } from "./app/context/GroupContext";

// * STYLES IMPORT

// * COMPONENTS IMPORT

export default function App() {
  return (
    <AuthContextProvider>
      <GroupContextProvider>
        <Router/>
      </GroupContextProvider>
    </AuthContextProvider>
  )  
};