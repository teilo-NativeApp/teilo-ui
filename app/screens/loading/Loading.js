import React from 'react';
import {View, ActivityIndicator} from 'react-native';

// * STYLES IMPORT
import loadingStyles from './loadingStyles';

export const Loading = () => {
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </View>
  );
};