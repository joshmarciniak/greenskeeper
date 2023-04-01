import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { PasswordValidation } from '../../constants/InputValidation';

const PasswordRequirements = ({password, passwordError}: {password: string, passwordError: string}) => {
  return (
    <View>
      <Text>Your Password Must:</Text>
      <View>
        {(PasswordValidation.UPPERCASE_REGEX.test(password) && PasswordValidation.LOWERCASE_REGEX.test(password)) ? <Icon name="check" /> : <Icon name="x" />}
        <Text>include at least one uppercase letter and lowercase letter</Text>
        {PasswordValidation.NUMBER_REGEX.test(password) ? <Icon name="check" /> : <Icon name="x" />}
        <Text>include at least one number</Text>
        {PasswordValidation.SPECIAL_CHARACTER_REGEX.test(password) ? <Icon name="check" /> : <Icon name="x" />}
        <Text>include at least one special character (!, @, #, etc)</Text>
        {password.length >= 8 ? <Icon name="check" /> : <Icon name="x" />}
        <Text>be a minimum of 8 characters long</Text>
      </View>
    </View>
  );
}

export default PasswordRequirements;