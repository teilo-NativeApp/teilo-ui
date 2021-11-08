import { StyleSheet } from 'react-native';

import { palette } from '../../styles/theme';

const drawerStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:palette.middle
  },
  icons:{
    fontSize:60,
    flex:1
  }
});

export default drawerStyles; 