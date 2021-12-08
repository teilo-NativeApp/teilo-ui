import { StatusBar, StyleSheet, Dimensions} from "react-native";
import { palette } from "../../styles/theme";

const addExpenseStyle = StyleSheet.create({
  modalContainer: {
    flex:1,
    backgroundColor: palette.light,
    paddingTop:60,
    paddingHorizontal:10
  },
  input:{
    marginVertical:10,
    fontSize:18,
    backgroundColor:palette.middle,
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical:10,
    borderRadius:23
  },
  dateInput:{
    marginTop:10,
    fontSize:18,
    backgroundColor:palette.middle,
    textAlign: 'center',
    paddingVertical:10,
    borderRadius:23,
    width:130
  },
  selectBox:{
    marginTop:10,
    fontSize:18,
    backgroundColor:palette.middle,
    alignItems:"center",
    height:42,
    paddingHorizontal:20,
    borderRadius:23,
  },
  label:{
    marginTop:20,
    color:"black",
    fontSize:20,
    fontFamily: "Syne-Regular",
  },
  font:{
    color:"black",
    fontFamily: "Syne-Regular",
    fontSize:18
  },
  optionContainer:{
    margin:0,
    paddingHorizontal:21
  },
  multiOptionContainer:{
    backgroundColor: palette.highlight,
    color:"black"
  },
  multi:{
    color:"black",
    fontFamily: "Syne-Regular",
    fontSize:18,
    marginTop:4
  },
  multiLabel:{
    color:"black",
    fontFamily: "Syne-Regular",
    fontSize:16
  }
});

export default addExpenseStyle;