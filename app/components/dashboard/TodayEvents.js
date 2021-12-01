import React from 'react';
import moment from 'moment';
import { View} from "react-native";

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Badge from '../general/Badge';

// * STYLES IMPORT
import dashboardStyles from './dashboardStyles';

const TodayTasks = ({event,index}) => {const eventHours = moment(event.date).format("HH");
  const eventMinutes = moment(event.date).format("mm");

  return(
    <View key={`e-${index}`} style={dashboardStyles.rowFlex}>
      <Badge title={`${eventHours}:${eventMinutes}`} event style={{flex:1}}/>
      <CustomText title={event.title} p style={{flex:1, paddingLeft:10}}/>
    </View>
  )
}

export default TodayTasks;