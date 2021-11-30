import React, { useState } from 'react'
import { Button, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import CustomText from '../../components/general/CustomText';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectBox from 'react-native-multi-selectbox';


// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import { useAuth } from '../../context/AuthContext';
import { useGroup } from '../../context/GroupContext';
import { updateGroup } from '../../hooks/apiCalls';

const Calculator = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [whoPaid, setWhoPaid] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const { authData } = useAuth();
  const { groupData } = useGroup();

  const usersForSelectBox = groupData.users.map(user => {
    return {item: `${user.firstName} ${user.lastName[0]}`, id: user._id}
  });

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSelect = () => {
    return (val) => setWhoPaid(val)
  };

  const onSubmit = async (data) => {
    // need to change this to use addExpense controller from backend
    data.date = date;
    data.whoPaid = whoPaid.id;
    const dataToSend = {expenses: data, groupID: authData.groups[0]};
    console.log(dataToSend);
    // const res = await updateGroup(dataToSend);
    // console.log(res);
  };

  const datePickerHandler = (selectedDate) => {
    if (Platform.OS === 'android') setIsPickerOpen(false)
    setDate(selectedDate);
  };

  const showDatePicker = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  return (
    <SafeAreaView style={generalStyles.AndroidSafeArea}>
      <StatusBar barStyle="dark-content"/>
      <View style={generalStyles.appContainer}>
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
        name="expenseName"
        defaultValue=""
      />
      {errors.expenseName && <Text>Name is required.</Text>}
      
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
        name="totalCost"
        defaultValue=""
      />
      {errors.totalCost && <Text>Cost is required.</Text>}

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
            onBlur={onBlur}
          />
        )}
        name="date"
        defaultValue=""
      />
      
      {/* take DateTimePicker out of the controller and use it to assign to the TextInput inside the form */}

      {isPickerOpen && (
              <View>
                <DateTimePicker
                  minimumDate={new Date(1901, 0, 1)}
                  maximumDate={new Date()}
                  value={date}
                  mode="date"
                  display="default"
                  onChange={(event, value) => {
                    datePickerHandler(value)
                    showDatePicker()
                  }
                  }
                />
               </View>
      )}

      <Controller
        control={control}
        rules={{
          required: false
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <SelectBox
            label="Who paid?"
            options={usersForSelectBox}
            value={whoPaid}
            onChange={onSelect()}
            hideInputFilter={false}
          />
        )}
        name="whoPaid"
        defaultValue=""
      />


      <Button title="Add Expense" onPress={handleSubmit(onSubmit)}/>


      </View>
    </SafeAreaView>
  )
}

export default Calculator
