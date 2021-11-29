import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { View } from "react-native";

// * CONTEXT IMPORT
import { useGroup } from '../../context/GroupContext';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Badge from '../general/Badge';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import dashboardStyles from './dashboardStyles';

const Upcoming = () => {
  const { groupData } = useGroup();

  const [upcoming1, setUpcoming1] = useState([]);
  const [upcoming2, setUpcoming2] = useState([]);
  const [upcoming3, setUpcoming3] = useState([]);

  useEffect(() => {
    printItems();
  }, [groupData]);

  const printItems = () => {
    let up1 = [];
    let up2 = [];
    let up3 = [];

    groupData.tasks.map((task, index)=>{
      const newTask = (
        <View key={`t-${index}`} style={dashboardStyles.rowFlex}>
          <CustomText title={`${moment(task.date).format("DD.MM.YY")}`} p bold style={{width:120}}/>
          <CustomText title={task.title} p style={{flex:1}}/>
          <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
        </View>
      )
      if(moment(task.date).format("DD") == moment().add(1,'days').format("DD")) up1.push(newTask);
      if(moment(task.date).format("DD") == moment().add(2,'days').format("DD")) up2.push(newTask);
      if(moment(task.date).format("DD") == moment().add(3,'days').format("DD")) up3.push(newTask);
    })
    groupData.events.map((event, index)=>{
      const eventHours = moment(event.date).format("HH");
      const eventMinutes = moment(event.date).format("mm");
      const newEvent = (
        <View key={`e-${index}`} style={dashboardStyles.rowFlex} >
          <CustomText title={`${moment(event.date).format("DD.MM.YY")}`} p bold style={{width:120}}/>
          <CustomText title={event.title} p style={{flex:1}}/>
          <Badge title={`${eventHours}:${eventMinutes}`} event style={{flex:1}}/>
        </View>
      )
      if(moment(event.date).format("DD") == moment().add(1,'days').format("DD")) up1.push(newEvent);
      if(moment(event.date).format("DD") == moment().add(2,'days').format("DD")) up2.push(newEvent);
      if(moment(event.date).format("DD") == moment().add(3,'days').format("DD")) up3.push(newEvent);
    })
    
    setUpcoming1(up1);
    setUpcoming2(up2);
    setUpcoming3(up3);
  }

  return (
    <View style={dashboardStyles.margin}>
      <CustomText title={"And get ready for:"} h2/>
      <View style={generalStyles.roundedBox}>
        {upcoming1}
        {upcoming2}
        {upcoming3}
      </View>
    </View>
  )
}

export default Upcoming;