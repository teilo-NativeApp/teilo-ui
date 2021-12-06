import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

// * STYLES IMPORT
import drawerStyles from './drawerStyles';

// * COMPONENTS IMPORT
import { useAuth } from '../../context/AuthContext';


const DrawerMenu = (props) => {
  const { signOut } = useAuth();

  return (
    <DrawerContentScrollView style={drawerStyles.container} {...props}>
      <View>
        <DrawerItemList {...props}/>
      </View>
      <View>
        <DrawerItem label="Logout" onPress={signOut} labelStyle={{
          fontFamily: 'Syne-Regular',
          fontSize:22,
          color:"black",
          alignSelf: "flex-start",
          height:40,
          textAlign:"center",
          borderWidth:2,
          borderRadius:20,
          paddingHorizontal:18,
          paddingVertical:4,
          overflow:"hidden"
          }}/>
      </View>
    </DrawerContentScrollView>
  )
}

export default DrawerMenu;
