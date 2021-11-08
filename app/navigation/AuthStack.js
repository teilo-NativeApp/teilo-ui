import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// * COMPONENTS IMPORT
import OnboardingScreen from '../screens/onboardingScreen/OnboardingScreen';
import Login from '../screens/login/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={OnboardingScreen} name="OnboardingScreen"/>
        <Stack.Screen component={Login} name="Login"/>
      </Stack.Navigator>
  )
}

export default AuthStack
