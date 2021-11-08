import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

// * COMPONENTS IMPORT
import Calculator from '../screens/calculator/Calculator';
import Calendar from '../screens/calendar/Calendar';
import Tasks from '../screens/tasks/Tasks';
import Dashboard from '../screens/dashboard/Dashboard';
import Settings from '../screens/settings/Settings';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen component={Calculator} name="Calculator"/>
      <Drawer.Screen component={Calendar} name="Calendar"/>
      <Drawer.Screen component={Tasks} name="Tasks"/>
      <Drawer.Screen component={Dashboard} name="Dashboard"/>
      <Drawer.Screen component={Settings} name="Settings"/>

    </Drawer.Navigator>
  )
}

export default AppStack;
