import React from "react";
import { NavigationContainer } from '@react-navigation/native';

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';

// * COMPONENTS IMPORT
import AuthStack from "../../navigation/AuthStack";
import AppStack from "../../navigation/AppStack";
import { Loading } from "../../screens/loading/Loading";

const Router = () => {
  const { authData, loading } = useAuth();

  // if (loading) {
  //   return <Loading/>;
  // }

  return(
    <NavigationContainer>
      {authData?.token ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}

export default Router;