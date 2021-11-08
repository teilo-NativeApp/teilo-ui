import React, { useContext, useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import CustomText from '../../components/general/CustomText';
import { UserContext } from '../../context/UserContext';
import { loginUser } from '../../hooks/apiCalls';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("Meda.Murray27@yahoo.com");
  const [password, setPassword] = useState("room7forlife");

  const loginHandler = async () => {
    const res = await loginUser({ email, password });
    if(!res.error) {
      setUser(res);
    }
  };

  return (
    <SafeAreaView>
      <Text>Login Screen</Text>
      <TextInput
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
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login
