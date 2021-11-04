import React from 'react';
import {
  View,
  Text
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from './dashboardStyles';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Checkbox from '../general/Checkbox';
import Badge from '../general/Badge';

const Today = () => {
  return (
    <View style={dashboardStyles.margin}>
      <CustomText title={"Today, don't forget to:"} h2/>
      <View style={generalStyles.roundedBox}>

        <View style={dashboardStyles.rowFlex}>
          <Checkbox/>
          <CustomText title={"clean kitchen"} p style={{flex:1}}/>
          <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
        </View>

        <View style={dashboardStyles.rowFlex}>
          <Checkbox/>
          <CustomText title={"take out trash"} p style={{flex:1}}/>
          <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
        </View>

      </View>
    </View>
  )
}

export default Today;