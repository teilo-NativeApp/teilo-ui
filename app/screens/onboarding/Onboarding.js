import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>
          Login and Signup will be here
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}; 

export default Onboarding;