import React from 'react';
import {
  SafeAreaView,
  Button,
  StatusBar, 
  View
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import Today from '../../components/dashboard/Today';
import Upcoming from '../../components/dashboard/Upcoming';
import Balance from '../../components/dashboard/Balance';
import {Day, Date} from '../../components/general/Time';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const { authData, signOut } = useAuth();
  
   return (
    <SafeAreaView style={generalStyles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content"/>
      <View style={generalStyles.appContainer}>
        <CustomText title={"Hey Jon!"} h1/>
        <CustomText title={`It's ${Day()}`} h1/>
        <CustomText title={`${Date()}`} h1 />
        <Today/>
        <Upcoming/>
        <Balance/>
        
        <Button title="Sign Out" onPress={signOut}/>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard;
