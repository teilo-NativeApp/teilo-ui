import React from 'react';
import { TouchableOpacity } from 'react-native';
import CustomText from '../../components/general/CustomText';
import { palette } from '../../styles/theme';

const CustomButton = ({onPress, title, style}) => {
  return(
    <TouchableOpacity onPress={onPress} style={style}>
      <CustomText title={title} h3 style={{
        alignSelf: "flex-start",
        height:40,
        textAlign:"center",
        borderWidth:2,
        backgroundColor:palette.middle,
        borderRadius:20,
        paddingHorizontal:18,
        paddingVertical:4,
        overflow:"hidden"
      }}/>
    </TouchableOpacity>
  )
};

export default CustomButton;