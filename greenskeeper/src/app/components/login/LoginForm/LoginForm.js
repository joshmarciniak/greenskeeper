import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <Text>Email</Text>
      <TextInput/>
      <Text>Password</Text>
      <TextInput/>
      <Button title="Login"></Button>
      <Text>Forgot Password?</Text>
    </View>
  )
};

export default LoginForm;