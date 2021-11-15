import React from 'react';
import {
  SafeAreaView,
  Button
} from "react-native";

// * STYLES IMPORT

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import Today from '../../components/dashboard/Today';
import Upcoming from '../../components/dashboard/Upcoming';
import Balance from '../../components/dashboard/Balance';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { authData, signOut } = useAuth();

  console.log(authData);

  return (
    <SafeAreaView>
      <CustomText title={"Hey Jon!"} h1/>
      <CustomText title={"It's Monday"} h1/>
      <CustomText title={"November 3rd"} h1 />

      <Today/>
      <Upcoming/>
      <Balance/>

      <Button title="Sign Out" onPress={signOut}/>
    </SafeAreaView>
  )
}

export default Dashboard;
