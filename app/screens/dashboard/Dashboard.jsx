import React from 'react';
import {
  SafeAreaView
} from "react-native";

// * STYLES IMPORT

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import Today from '../../components/dashboard/Today';
import Upcoming from '../../components/dashboard/Upcoming';
import Balance from '../../components/dashboard/Balance';

const Dashboard = () => {
  return (
    <SafeAreaView>
      <CustomText title={"Hey Jon!"} h1/>
      <CustomText title={"It's Monday"} h1/>
      <CustomText title={"November 3rd"} h1 />

      <Today/>
      <Upcoming/>
      <Balance/>
    </SafeAreaView>
  )
}

export default Dashboard;
