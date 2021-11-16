import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar, 
  ScrollView,
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
import { useGroup } from '../../context/GroupContext';

const Dashboard = () => {
  const { authData } = useAuth();
  const { setGroupData } = useGroup()

  useEffect(() => {
    console.log(authData);
  }, [])

   return (
     <>
      <SafeAreaView style={generalStyles.AndroidSafeArea}>
        <StatusBar barStyle="dark-content"/>
      </SafeAreaView>
      <ScrollView style={generalStyles.appContainer}>
        <CustomText title={`Hey ${authData.firstName}!`} h1/>
        <CustomText title={`It's ${Day()}`} h1/>
        <CustomText title={`${Date()}`} h1/>
        <Today/>
        <Upcoming/>
        <Balance/>
      </ScrollView>
    </>
  )
}

export default Dashboard;
