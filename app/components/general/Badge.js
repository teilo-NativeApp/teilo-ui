import React from 'react';
import { Text } from "react-native";

import {palette} from '../../styles/theme';

const Badge = ({title, userColor, task, event}) => {
  return (
    <Text style={[
    {
      borderWidth:2,
      paddingVertical:4,
      paddingHorizontal:20,
      borderRadius:15,
      overflow: "hidden",
    },
    task && {backgroundColor: userColor},
    event && {backgroundColor: palette.light}
  ]}>{title}</Text>
  )
}

export default Badge;
