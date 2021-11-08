import React from 'react';
import {
  View
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from '../../screens/dashboard/dashboardStyles';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Checkbox from '../general/Checkbox';

const Balance = () => {
  return (
    <View style={dashboardStyles.margin}>
      <CustomText title={"Your balance:"} h2/>

      <View style={generalStyles.roundedBox}>
        <View style={dashboardStyles.rowFlex}>
          <Checkbox/>
          <CustomText title={"You owe 35,33€ to Norman"} p style={{flex:1}}/>
        </View>
        <View style={dashboardStyles.rowFlex}>
          <Checkbox/>
          <CustomText title={"You are owed 42,19€ by Tim"} p style={{flex:1}}/>
        </View>
      </View>

    </View>
  )
}

export default Balance;