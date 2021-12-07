import React, { useState } from 'react';
import {
  View
} from "react-native";

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from './dashboardStyles';


const Balance = () => {
  const { authData } = useAuth();
  const [showIndBalances, setShowIndBalances] = useState(false)

  const individualBalances = authData?.individualBalances?.map((item, index)=>{
    if(item.amount<0){
      return(
        <View key={`b-${index}`} style={dashboardStyles.rowFlex}>
          <CustomText title={`You owe ${Math.abs(item.amount)}€ to ${item.firstName}`} p style={{flex:1}}/>
        </View>
      )
    } else if(item.amount>0){
      return ( 
        <View key={`b-${index}`} style={dashboardStyles.rowFlex}>
          <CustomText title={`You are owed ${item.amount}€ by ${item.firstName}`} p style={{flex:1}}/>
        </View>
      )
    } else return;
  })

  return (
    <View style={{marginBottom:40, marginTop:22}}>
      {authData.overallAmount && <CustomText 
        onPress={()=>setShowIndBalances(!showIndBalances)}
        title={`Your balance is ${authData.overallAmount}€ ▾`}
        h2
      />}
      {showIndBalances ? (<View style={generalStyles.roundedBox}>
        {individualBalances}
      </View>) : null}
    </View>
  )
}

export default Balance;