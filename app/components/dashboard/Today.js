import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { View,
  Text
} from "react-native";

// * CONTEXT IMPORT
import { useGroup } from '../../context/GroupContext';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Checkbox from '../general/Checkbox';
import Badge from '../general/Badge';
import { isToday } from '../general/Time';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from './dashboardStyles';
import { useAuth } from '../../context/AuthContext';

const Today = () => {
  const { groupData } = useGroup();
  const { loading, setLoading } = useAuth();
  const [todayTasks, setTodayTasks] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);

  useEffect(() => {
    printItems();
  }, [groupData]);
  
  const printItems = () => {
    const mapTasks = groupData.tasks.map((task, index)=>{
      if(isToday(new Date(task.date))){
        return(
          <View key={index} style={dashboardStyles.rowFlex}>
            <Checkbox/>
            <CustomText title={task.title} p style={{flex:1}}/>
            <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
          </View>
        )
      };
    })
    const mapEvents = groupData.events.map((event, index)=>{
      if(isToday(new Date(event.date))){
        const eventHours = moment(event.date).format("HH");
        const eventMinutes = moment(event.date).format("mm");
        return(
          <View key={index} style={dashboardStyles.rowFlex}>
            <Checkbox/>
            <CustomText title={event.title} p style={{flex:1}}/>
            <Badge title={`${eventHours}:${eventMinutes}`} event style={{flex:1}}/>
          </View>
        )
      }
    })
    setTodayTasks(mapTasks);
    setTodayEvents(mapEvents);
  }
  
  return (
    <View style={dashboardStyles.margin}>
      <CustomText title={"Today, don't forget to:"} h2 />
      <View style={generalStyles.roundedBox}>
        {todayTasks}
        {todayEvents}
      </View>
    </View>
  )
}

export default Today;