import React from 'react';
import {
  SafeAreaView,
  StatusBar, 
  ScrollView
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
  const { authData } = useAuth();

   return (
    <SafeAreaView style={generalStyles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content"/>
      <ScrollView style={generalStyles.appContainer}>
        <CustomText title={`Hey ${authData.firstName}!`} h1 bold/>
        <CustomText title={`It's ${Day()}`} h1 bold/>
        <CustomText title={`${Date()}`} h1 bold/>
        <Today/>
        <Upcoming/>
        <Balance/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard;
