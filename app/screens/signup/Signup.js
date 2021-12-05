import React from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { createUser } from '../../hooks/apiCalls';

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import CustomButton from '../../components/general/CustomButton';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import loginStyles from '../login/loginStyles';

const Signup = ({setSignup}) => {
  const { setNewUser } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const signUpHandler = async (data) => {
    const res = await createUser(data);
    if (!res.error) {
      setNewUser(res);
      navigation.navigate("GroupLoginOrCreation");
    } else {
      console.log(res.error);
    }
  };

  return (
    <>
      <View style={loginStyles.window}>
        <CustomText title="Signup" h1  style={{marginBottom:10}}/>

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={loginStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="First name"
            />
          )}
          name="firstName"
          defaultValue=""
        />
        {errors.firstName && <Text>First name is required</Text>}
        
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={loginStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Last name"
            />
          )}
          name="lastName"
          defaultValue=""
        />
        {errors.lastName && <Text>Last name is required</Text>}

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={loginStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              placeholder="Desired username"
            />
          )}
          name="username"
          defaultValue=""
        />
        {errors.username && <Text>Username is required</Text>}

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={loginStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text>Email is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={loginStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder="Password"
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text>Password is required.</Text>}
        
        <Controller
          control={control}
          rules={{
            required: false
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={loginStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              keyboardType="numeric"
              placeholder="Monthly Net Income (optional)"
            />
          )}
          name="income"
          defaultValue=""
        />
        
        <CustomButton onPress={handleSubmit(signUpHandler)} title="Submit" style={{marginVertical:20}}/>

        <TouchableOpacity onPress={()=>setSignup(false)}>
          <CustomText title="← back" p/>
        </TouchableOpacity>

      </View>
    </>
  )
}

export default Signup
