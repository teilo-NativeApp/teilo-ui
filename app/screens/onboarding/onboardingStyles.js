import { StyleSheet } from "react-native";

import {palette, users, border} from '../../styles/theme';

const onboardingStyles = StyleSheet.create({
  window: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: palette.light,
    padding:10
  },
  borders:{
    width:140,
    height:56,
    textAlign:"center",
    borderWidth:2,
    borderRadius:28,
    paddingHorizontal:30,
    paddingVertical:10,
    margin:20,
    backgroundColor:palette.middle,
    overflow:"hidden"
  }
});

export default onboardingStyles;