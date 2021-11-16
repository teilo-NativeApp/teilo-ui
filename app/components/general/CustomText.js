import React from 'react';
import { Text } from 'react-native';

const CustomText = ({h1, h2, h3, p, bold, title, style, ...rest}) => {
  return(
    <Text style={[
      h1 && { fontSize: 34 },
      h2 && { fontSize: 26 },
      h3 && { fontSize: 22 },
      p && { fontSize: 18 },
      bold && { fontWeight: 'bold' },
      style
    ]}{...rest}>{title}</Text>
  )
};

export default CustomText;