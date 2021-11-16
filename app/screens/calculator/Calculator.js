import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text, TextInput } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import CustomText from '../../components/general/CustomText'

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

const Calculator = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
    <SafeAreaView style={generalStyles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content"/>
      <ScrollView style={generalStyles.appContainer}>
        <CustomText
          title="Calculator"
          h2
        />
        
        <CustomText
          title="Overview: "
          h3
        />
        
        <CustomText
          title="Add Expense: "
          h3
        />

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Title"
            autoCapitalize="false"
          />
        )}
        name="expenseTitle"
        defaultValue=""
      />
      {errors.expenseTitle && <Text>Title is required.</Text>}
      
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Cost"
            autoCapitalize="none"
            keyboardType="numeric"
          />
        )}
        name="expenseCost"
        defaultValue=""
      />
      {errors.expenseCost && <Text>Cost is required.</Text>}

      </ScrollView>
    </SafeAreaView>
  )
}

export default Calculator
