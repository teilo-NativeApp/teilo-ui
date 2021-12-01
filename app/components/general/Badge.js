import React from 'react';
import { Text } from "react-native";

import {palette} from '../../styles/theme';

const Badge = ({title, userColor, task, event}) => {
  return (
    <Text style={[
    {
      width: 60,
      borderWidth:2,
      paddingVertical:2,
      borderRadius:13,
      overflow: "hidden",
      textAlign: "center"
    },
    task && {backgroundColor: userColor},
    event && {backgroundColor: palette.light}
  ]}>{title}</Text>
  )
}

export default Badge;
