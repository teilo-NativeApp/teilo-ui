import React, { useState } from 'react'
import { Button, Modal, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import Balance from '../../components/dashboard/Balance';
import AddExpense from '../addExpense/AddExpense';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import { useAuth } from '../../context/AuthContext';
import { useGroup } from '../../context/GroupContext';

const Calculator = () => {
  const [modalVisible, setModalVisible] = useState(false);

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

        <AddExpense modalVisible={modalVisible} setModalVisible={() => setModalVisible(!modalVisible)}/>

        <Button title="Add Expense" onPress={() => setModalVisible(!modalVisible)}></Button>
      </View>
    </>
  )
}

export default Calculator
