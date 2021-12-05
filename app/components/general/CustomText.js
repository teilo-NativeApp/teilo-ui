import React from 'react';
import { Text } from 'react-native';

const CustomText = ({h1, h2, h3, p, bold, title, style, ...rest}) => {
  return(
    <Text style={[
      {fontFamily: "Syne-Regular"},
      h1 && { fontSize: 34 },
      h2 && { fontSize: 28 },
      h3 && { fontSize: 22 },
      p && { fontSize: 20 },
      bold && { fontWeight: 'bold' },
      style
    ]}{...rest}>{title}</Text>
  )
};

export default CustomText;