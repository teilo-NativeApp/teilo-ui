import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import onboardingStyles from './onboardingStyles';

const Onboarding = ({navigation}) => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <>
      <SafeAreaView style={generalStyles.AndroidSafeArea}>
        <StatusBar barStyle="dark-content"/>
      </SafeAreaView>
      <View style={onboardingStyles.window}>
        <View style={{marginVertical:30}}>
          <CustomText title={`teilo`} h1 style={{fontSize: 100}}/>
        </View>
        <View>
          {!login && !signup ? (
            <>
              <TouchableOpacity onPress={() =>{
                setSignup(false);
                setLogin(true);
              }}>
                <CustomText title={`Login`} h2 style={onboardingStyles.borders}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{
                setLogin(false);
                setSignup(true);
              }}>
                <CustomText title={`Signup`} h2 style={onboardingStyles.borders}/>
              </TouchableOpacity>
            </>
          ) : null}
        {login && !signup ? <Login setLogin={setLogin} /> : null}
        {signup && !login ? <Signup setSignup={setSignup}/> : null}
        </View>
      </View>
    </>
  );
}; 

export default Onboarding;