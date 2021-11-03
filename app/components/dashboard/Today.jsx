import React from 'react';
import {
  View
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';

const Today = () => {
  return (
    <View>
      <CustomText title={"Today, don't forget to:"} h2/>
      <View style={generalStyles.roundedBox}>
        <CustomText title={"clean kitchen"} p/>
        <CustomText title={"take out trash"} p/>
      </View>
    </View>
  )
}

export default Today;