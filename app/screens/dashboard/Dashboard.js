import React, { useEffect } from 'react';
import moment from 'moment';
import { SafeAreaView, StatusBar, ScrollView } from "react-native";

// * COMPONENTS IMPORT
import { getDashboardData } from '../../hooks/apiCalls';
import CustomText from '../../components/general/CustomText';
import Today from '../../components/dashboard/Today';
import Upcoming from '../../components/dashboard/Upcoming';
import Balance from '../../components/dashboard/Balance';
import { expenseCalculationByIncome, expenseCalculationEvenly } from '../../hooks/calculation';

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';
import { useGroup } from '../../context/GroupContext';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

const Dashboard = () => {
  const { authData, setAuthData, setLoading } = useAuth();
  const { groupData, setGroupData } = useGroup();

  useEffect(() => {
    threeDayData();
  }, [])

  useEffect(() => {
    calculateBalance()
  }, [groupData])


  const calculateBalance = () => {
    const { users, expenses } = groupData;
    const allBalances = groupData.incomeBased ? expenseCalculationByIncome(users, expenses) : expenseCalculationEvenly(users, expenses);
    const userLoggedIn = allBalances.find(item => item._id === authData._id);
    setAuthData({...authData, ...userLoggedIn});
  };

  const threeDayData = async() => {
    try {
      const res = await getDashboardData(authData.groups[0])
      if (res !== undefined){
        setGroupData(res)
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

   return (
     <>
      <SafeAreaView style={generalStyles.AndroidSafeArea}>
        <StatusBar barStyle="dark-content"/>
      </SafeAreaView>
      <ScrollView style={generalStyles.appContainer}>
        <CustomText title={`Hey ${authData.firstName}!`} h1/>
        <CustomText title={`It's ${moment().format("dddd")}`} h1/>
        <CustomText title={`${moment().format("MMMM Do")}`} h1/>
        <Today/>
        <Upcoming/>
        <Balance/>
      </ScrollView>
    </>
  )
}

export default Dashboard;
