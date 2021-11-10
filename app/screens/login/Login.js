import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import CustomText from '../../components/general/CustomText';
import { useForm, Controller } from 'react-hook-form';

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';

// * STYLES IMPORT


// * COMPONENTS IMPORT
// import { loginUser } from '../../hooks/apiCalls';

const Login = () => {
  const { logIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm();

  const loginHandler = async (data) => {
    await logIn(data);
  };

  return (
    <SafeAreaView>
      <CustomText
        title="Login Screen"
        h1
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
            keyboardType="email-address"
            placeholder="Enter email"
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
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Enter password"
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text>Password is required.</Text>}

      <Button title="Login" onPress={handleSubmit(loginHandler)}/>

      {/* <TextInput
        placeholder="Email"
        value="Meda.Murray27@yahoo.com"
        onChangeText={input => setEmail(input)}>
      </TextInput>
      <TextInput
        placeholder="Password"
        value="room7forlife"
        onChangeText={input => setPassword(input)}>
      </TextInput>
      <TouchableOpacity onPress={loginHandler}>
        <CustomText
          title="Login"
          p
        />
      </TouchableOpacity> */}
    </SafeAreaView>
  )
}

export default Login
