import React, { useState, useEffect } from 'react';
import { View, Alert } from "react-native";

// * CONTEXT IMPORT
import { useGroup } from '../../context/GroupContext';

// * COMPONENTS IMPORT
import CustomText from '../general/CustomText';
import Checkbox from '../general/Checkbox';
import Badge from '../general/Badge';

// * STYLES IMPORT
import dashboardStyles from './dashboardStyles';

const TodayTasks = ({task,index}) => {
  const { groupData, setGroupData } = useGroup();
  const [checkboxState, setCheckboxState] = useState(false);

  
  const solveAlert = () => {
    Alert.alert("📋", "Have you completed this task?", [
        {
          text: "Cancel", onPress: () => setCheckboxState(false), style: "cancel"
        },
        { text: "Solved", onPress: () => solveTask() }
      ]
    );
  }

  const solveTask = () => {
    const newTasks = groupData.tasks.map(item=>{
      if(item._id === task._id){
        item.completed = true;
      } return item;
    });
    console.log(newTasks);
    setGroupData({...groupData, tasks:newTasks})
  }

  const handlePress = () => {
    console.log(task);
    setCheckboxState(!checkboxState);
    solveAlert();
  }

  return(
    <View key={`t-${index}`} style={dashboardStyles.rowFlex}>
      <Badge title={"task"} task userColor={"red"} style={{flex:1}}/>
      <CustomText title={task.title} p style={{flex:1, paddingLeft:10}}/>
      <Checkbox isChecked={checkboxState} onPress={handlePress}/>
    </View>
  )
}

export default TodayTasks;