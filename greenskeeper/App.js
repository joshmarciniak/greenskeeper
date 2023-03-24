import React from 'react';
import type {Node} from 'react';

import {
  View,
} from 'react-native';

import Login from './src/app/components/login/Login';
import RegisterForm from './src/app/components/register/RegisterForm';

const App: () => Node = () => {
  return (
    <View>
      <Login></Login>
      <RegisterForm></RegisterForm>
    </View>
  );
};


export default App;
