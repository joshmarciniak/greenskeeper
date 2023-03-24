import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const RegisterForm = () => {
  return (
    <View>
      <Text>Username</Text>
      <TextInput/>
      <Text>Email</Text>
      <TextInput/>
      <Text>Password</Text>
      <TextInput/>
      <Button title="Sign Up"/>
    </View>
  );
}

export default RegisterForm;