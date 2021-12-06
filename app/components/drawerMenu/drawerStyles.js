import { StyleSheet } from 'react-native';

import { palette } from '../../styles/theme';

const drawerStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:palette.light
  },
  icons:{
    fontSize:60
  }
});

export default drawerStyles;