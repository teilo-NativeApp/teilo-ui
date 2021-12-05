import { StatusBar, StyleSheet } from "react-native";

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
    paddingVertical: 5,
    marginVertical:10
  }
});

export default generalStyles;