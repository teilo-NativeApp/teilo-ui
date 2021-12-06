import { StyleSheet } from 'react-native';

const dashboardStyles = StyleSheet.create({
  margin:{
    marginTop:22
  },
  rowFlex:{
    flexDirection:"row",
    marginVertical:3
  },
  balanceRow:{
    marginBottom:40,
    marginTop:22,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  balanceNumber:{
    fontSize:24
  }
});

export default dashboardStyles;