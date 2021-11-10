import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomText from '../../components/general/CustomText';

const Signup = () => {
  return (
    <SafeAreaView>
      <CustomText
        title="Signup Screen"
        h1
      />
    </SafeAreaView>
  )
}

export default Signup
