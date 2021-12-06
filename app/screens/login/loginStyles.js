import { StyleSheet, Dimensions } from "react-native";


import {palette} from '../../styles/theme';

const loginStyles = StyleSheet.create({
  window: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.light,
    padding:10
  },
  input:{
    width:Dimensions.get('window').width-40,
    marginVertical:8,
    fontSize:18,
    backgroundColor:palette.middle,
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical:10,
    borderRadius:23
  }
});

export default loginStyles;