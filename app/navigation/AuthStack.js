import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// * COMPONENTS IMPORT
import OnboardingScreen from '../screens/onboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/loginscreen/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={OnboardingScreen} name="OnboardingScreen"/>
        <Stack.Screen component={LoginScreen} name="Login"/>
      </Stack.Navigator>
  )
}

export default AuthStack
