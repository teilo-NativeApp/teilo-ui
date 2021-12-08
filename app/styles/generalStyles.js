import { StatusBar, StyleSheet, Dimensions} from "react-native";

import {palette, users, border} from './theme';

const generalStyles = StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: palette.light,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  appContainer: {
    flex:1,
    backgroundColor: palette.light,
    padding:10
  },
  roundedBox: {
    backgroundColor: palette.middle,
    borderRadius: border,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical:10,
    shadowOffset:{  width: 0,  height: 2 },
    shadowColor: palette.dark,
    shadowOpacity: 1,
    shadowRadius: 8
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

export default generalStyles;