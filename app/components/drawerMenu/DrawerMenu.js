import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// * STYLES IMPORT
import drawerStyles from './drawerStyles';

// * COMPONENTS IMPORT


const DrawerMenu = (props) => {
  return (
    <DrawerContentScrollView style={drawerStyles.container} {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default DrawerMenu;
