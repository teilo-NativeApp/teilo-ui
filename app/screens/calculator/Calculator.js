import React, { useState } from 'react'
import { Button, Modal, Pressable, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import moment from 'moment';

// * CONTEXT IMPORT
import { useGroup } from '../../context/GroupContext';
import { useAuth } from '../../context/AuthContext';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import Balance from '../../components/dashboard/Balance';
import CustomButton from '../../components/general/CustomButton';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import calculatorStyles from './calculatorStyles';

const Calculator = () => {
  const {groupData} = useGroup();
  const {authData} = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  const threeDayExpenses = groupData.expenses?.map((expense,index)=>{
    return(
      <View key={`b-${index}`} style={calculatorStyles.rowFlex}>
        <View style={{width:75}}>
          <CustomText title={`${moment(expense.date).format("DD.MM.YY")}`} p bold/>
        </View>
        <View style={{width:225}}>
          <CustomText title={`${expense.expenseName}`} p/>
        </View>
        <View>
          <CustomText title={`${expense.totalCost}€`} p/>
        </View>
      </View>
    )
  })

  return (
    <>
      <SafeAreaView style={generalStyles.AndroidSafeArea}>
        <StatusBar barStyle="dark-content"/>
      </SafeAreaView>
      <View style={generalStyles.appContainer}>
        <CustomText title="Calculator" h1 style={{textAlign:"center"}}/>

        <View style={{marginTop:22}}>
          <CustomText
              title={`Your balance is ${authData.overallAmount>0 ? "+" : null}${authData.overallAmount.toFixed(2)}€`}
              h2
            />
          <Balance/>
        </View>
    
        <View style={{marginTop:22}}>
          <CustomText 
            // onPress={()=>setShowIndBalances(!showIndBalances)}
            title={`Unsettled expenses`}
            h2
            />
          <View style={generalStyles.roundedBox}>
            {threeDayExpenses}
          </View>
        </View>

        <CustomButton onPress={() => setModalVisible(!modalVisible)} title="Add Expense +" style={{marginVertical:20}}/>

        <AddExpense modalVisible={modalVisible} setModalVisible={() => setModalVisible(!modalVisible)}/>
        
      </View>
    </>
  )
}

export default Calculator
