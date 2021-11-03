import React from 'react';
import {
  View
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';

const Balance = () => {
  return (
    <View>
      <CustomText title={"Balance"} h2/>
      <View style={generalStyles.roundedBox}>
        <CustomText title={"You owe 35,33€ to Norman"} p/>
        <CustomText title={"You are owed 42,19€ by Tim"} p/>
      </View>
    </View>
  )
}

export default Balance;