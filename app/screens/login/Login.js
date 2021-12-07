import React from 'react'
import { SafeAreaView, Text, TextInput, Button, View, StatusBar } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

// * CONTEXT IMPORT
import { useAuth } from '../../context/AuthContext';

// * COMPONENTS IMPORT
import CustomText from '../../components/general/CustomText';
import CustomButton from '../../components/general/CustomButton';

// * STYLES IMPORT
import generalStyles from '../../styles/generalStyles';
import loginStyles from './loginStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { palette } from '../../styles/theme';

const Login = ({setLogin}) => {
  const { logIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm();

  const loginHandler = async (data) => {
    await logIn(data);
  };

  return (
    <>
      <View style={loginStyles.window}>
        <CustomText title="Login" h1  style={{marginBottom:10}}/>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, value, onBlur }}) => (
            <TextInput
              style={generalStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              placeholder="Enter email"
              autoCapitalize="none"
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
              style={generalStyles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              placeholder="Enter password"
              // placeholderTextColor={`red`}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text>Password is required.</Text>}

        <CustomButton onPress={handleSubmit(loginHandler)} title="Submit" style={{marginVertical:20}}/>

        <TouchableOpacity onPress={()=>setLogin(false)}>
          <CustomText title="← back" p/>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Login
