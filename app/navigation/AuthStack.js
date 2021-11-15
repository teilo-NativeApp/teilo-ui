import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// * COMPONENTS IMPORT
import OnboardingScreen from '../screens/onboarding/Onboarding';
import Login from '../screens/login/Login';
import AppStack from './AppStack';
import Signup from '../screens/signup/Signup';
import GroupLoginOrCreation from '../screens/groupLogin/GroupLoginOrCreation';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={OnboardingScreen} name="OnboardingScreen"/>
      <Stack.Screen component={Login} name="Login"/>
      <Stack.Screen component={Signup} name="Signup"/>
      <Stack.Screen component={GroupLoginOrCreation} name="GroupLoginOrCreation"/>
      <Stack.Screen component={AppStack} name="AppStack"/>
    </Stack.Navigator>
  )
}

export default AuthStack
