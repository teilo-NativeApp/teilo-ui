import { StyleSheet } from "react-native";

import {palette, users, border} from './theme';

const generalStyles = StyleSheet.create({
  appContainer: {
    margin: 16,
    backgroundColor: palette.light,
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