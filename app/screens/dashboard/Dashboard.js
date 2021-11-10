import React from 'react';
import {
  SafeAreaView
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import Today from '../../components/dashboard/Today';
import Upcoming from '../../components/dashboard/Upcoming';
import Balance from '../../components/dashboard/Balance';

const Dashboard = () => {
  return (
    <SafeAreaView style={[generalStyles.AndroidSafeArea, generalStyles.appContainer]}>
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
