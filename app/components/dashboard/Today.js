import React, { useState, useEffect } from 'react';
import { View} from "react-native";

// * CONTEXT IMPORT
import { useGroup } from '../../context/GroupContext';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import { isToday } from '../general/Time';
import TodayTasks from './TodayTasks';
import TodayEvents from './TodayEvents';

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
      if(isToday(new Date(task.date)) && task.completed == false){
        return <TodayTasks task={task} key={index}/>
      };
    })
    const mapEvents = groupData.events.map((event, index)=>{
      if(isToday(new Date(event.date))){
        return <TodayEvents event={event} key={index}/>
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
        {/* {todayTasks.length > 0 ? todayTasks : null}
        {todayEvents.length > 0 ? todayEvents : null} */}
        {/* {todayEvents.length > 0 && todayTasks.length > 0 ? <CustomText title="Looks like you have nothing to do today!" /> : null} */}
        
      </View>
    </View>
  )
}

export default Today;