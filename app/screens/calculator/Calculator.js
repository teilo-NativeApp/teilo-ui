import React, { useState } from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectBox from 'react-native-multi-selectbox';
import Balance from '../../components/dashboard/Balance';
import AddExpense from '../addExpense/AddExpense';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import { useAuth } from '../../context/AuthContext';
import { useGroup } from '../../context/GroupContext';
import { updateGroup } from '../../hooks/apiCalls';

const Calculator = () => {

  return (
    <>
      <SafeAreaView style={generalStyles.AndroidSafeArea}>
        <StatusBar barStyle="dark-content"/>
      </SafeAreaView>
      <View style={generalStyles.appContainer}>
        <CustomText
         title="Calculator"
         h2
        />

        <CustomText
          title="Overview: "
          h3
        />

        <Balance/>
      </View>
    </>
  )
}

export default Calculator
