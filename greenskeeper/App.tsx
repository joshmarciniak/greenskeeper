import React from 'react';
import type {Node} from 'react';

import {
  View,
  ScrollView
} from 'react-native';

import Login from './src/app/components/login/Login';
import RegisterForm from './src/app/components/register/RegisterForm';

const App: () => Node = () => {
  return (
    <ScrollView>
      <View>
        <RegisterForm></RegisterForm>
      </View>
    </ScrollView>
  );
};


export default App;
