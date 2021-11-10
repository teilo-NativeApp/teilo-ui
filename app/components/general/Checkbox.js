import React from 'react';

import BouncyCheckbox from "react-native-bouncy-checkbox";

const Checkbox = () => {
  return(
    <BouncyCheckbox
      iconStyle={{ borderColor: "black", borderWidth: 2}}
      size={26}
      fillColor="black"
      color="black"
      bounceFriction="6"
    />
  )
};

export default Checkbox;