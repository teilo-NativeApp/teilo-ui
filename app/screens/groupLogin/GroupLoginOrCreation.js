import React from 'react'
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native'
import CustomText from '../../components/general/CustomText'
import { useAuth } from '../../context/AuthContext'
import { useForm, Controller } from 'react-hook-form';
import { updateUser } from '../../hooks/apiCalls';

const GroupLoginOrCreation = () => {
  const { newUser, authData, setAuthData } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const addGroupIDToUser = async (data) => {
    newUser.groups = [data.apartmentID];
    
    const res = await updateUser(newUser);
    if (!res.error) {
      setAuthData(newUser);
      
    } else {
      console.log(res.error);
    };
  };

  return (
    <SafeAreaView>
      <CustomText
        title="Group Sign In"
        h1
      />
      
      <Text>Want to join an existing apartment? Enter the ID here:</Text>
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
            placeholder="Apartment ID"
          />
        )}
        name="apartmentID"
        defaultValue=""
      />
      {errors.apartmentID && <Text>An apartment ID is required</Text>}

      <Button title="Join Apartment" onPress={handleSubmit(addGroupIDToUser)}/>
      
      <Text>No apartment yet? Create one here:</Text>
      
    </SafeAreaView>
  )
}

export default GroupLoginOrCreation
