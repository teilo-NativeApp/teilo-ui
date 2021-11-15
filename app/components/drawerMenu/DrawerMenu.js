import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

// * STYLES IMPORT
import drawerStyles from './drawerStyles';

// * COMPONENTS IMPORT
import { useAuth } from '../../context/AuthContext';


const DrawerMenu = (props) => {
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView style={drawerStyles.container} {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={signOut}/>
    </DrawerContentScrollView>
  )
}

export default DrawerMenu;
