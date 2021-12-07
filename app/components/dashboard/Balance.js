import React, { useState } from 'react';
import { View, Text } from "react-native";

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from './dashboardStyles';


const Balance = () => {
  const { authData } = useAuth();

  const individualBalances = authData?.individualBalances?.map((item, index)=>{
    if(item.amount<0){
      return(
        <View key={`b-${index}`} style={dashboardStyles.rowFlex}>
          <CustomText title={`You owe ${Math.abs(item.amount.toFixed(2))}€ to ${item.firstName}`} p style={{flex:1}}/>
        </View>
      )
    } else if(item.amount>0){
      return ( 
        <View key={`b-${index}`} style={dashboardStyles.rowFlex}>
          <CustomText title={`You are owed ${item.amount.toFixed(2)}€ by ${item.firstName}`} p style={{flex:1}}/>
        </View>
      )
    } else return;
  })

  if(individualBalances.length>0){
    return (
      <View style={generalStyles.roundedBox}>
        {individualBalances}
      </View>
    )
  } else {
    return (<View style={generalStyles.roundedBox}>
      <Text>No balances yet.</Text>
    </View>)
  }
}

export default Balance;