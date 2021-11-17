import React, { useState } from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import CustomText from '../../components/general/CustomText';
import DateTimePicker from '@react-native-community/datetimepicker';


// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';

const Calculator = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log({...data, expenseDate: date});
  };

  const datePickerHandler = (selectedDate) => {
    if (Platform.OS === 'android') setIsPickerOpen(false)
    setDate(selectedDate);
  };

  const showDatePicker = () => {
    setIsPickerOpen(true);
  };

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
            autoCapitalize="none"
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
            keyboardType="numeric"
            placeholder="Cost"
          />
        )}
        name="expenseCost"
        defaultValue=""
      />
      {errors.expenseCost && <Text>Cost is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: false
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onFocus={() => showDatePicker()}
            onChangeText={onChange}
            value={date.toLocaleDateString()}
            placeholder="Date"
          />
        )}
        name="expenseDate"
        defaultValue=""
      />

      {/* take DateTimePicker out of the controller and use it to assign to the TextInput inside the form */}

      {isPickerOpen && (
              <View>
                <DateTimePicker
                  minimumDate={new Date(1901, 0, 1)}
                  maximumDate={new Date()}
                  value={new Date()}
                  mode="date"
                  display="default"
                  onChange={(event, value) => datePickerHandler(value)}
                />
               </View>
      )}

      <Button title="Add Expense" onPress={handleSubmit(onSubmit)}/>


      </ScrollView>
    </SafeAreaView>
  )
}

export default Calculator
