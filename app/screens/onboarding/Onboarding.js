import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>
          Signup
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}; 

export default Onboarding;