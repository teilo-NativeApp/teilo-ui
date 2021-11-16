import React from 'react';
import { View } from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from './dashboardStyles';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Badge from '../general/Badge';

const Upcoming = () => {
  return (
    <View style={dashboardStyles.margin}>
      <CustomText title={"And get ready for:"} h2/>
      <View style={generalStyles.roundedBox}>

        <View>
          <View style={dashboardStyles.rowFlex}>
            <CustomText title={"04.11.2021"} p bold style={{width:120}}/>
            <CustomText title={"clean kitchen"} p style={{flex:1}}/>
            <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
          </View>
        </View>

        <View>
          <View style={dashboardStyles.rowFlex} >
            <CustomText title={""} p bold style={{width:120}}/>
            <CustomText title={"take out trash"} p style={{flex:1}}/>
            <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
          </View>
        </View>

        <View>
          <View style={dashboardStyles.rowFlex} >
            <CustomText title={"05.11.2021"} p bold style={{width:120}}/>
            <CustomText title={"wash dishes"} p style={{flex:1}}/>
            <Badge title={"task"} event userColor={"red"} style={{flex:1}}/>
          </View>
        </View>

        <View>
          <View style={dashboardStyles.rowFlex} >
            <CustomText title={"06.11.2021"} p bold style={{width:120}}/>
            <CustomText title={"clean kitchen"} p style={{flex:1}}/>
            <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
          </View>
        </View>

        <View>
          <View style={dashboardStyles.rowFlex} >
            <CustomText title={""} p bold style={{width:120}}/>
            <CustomText title={"bar night out"} p style={{flex:1}}/>
            <Badge title={"task"} event userColor={"red"} style={{flex:1}}/>
          </View>
        </View>
        
      </View>
    </View>
  )
}

export default Upcoming;