import React from 'react';
import {
  View
} from "react-native";

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';

const Upcoming = () => {
  return (
    <View>
      <CustomText title={"And get ready for:"} h2/>
      <View style={generalStyles.roundedBox}>
        <CustomText title={"clean kitchen"} p/>
        <CustomText title={"take out trash"} p/>
      </View>
    </View>
  )
}

export default Upcoming;