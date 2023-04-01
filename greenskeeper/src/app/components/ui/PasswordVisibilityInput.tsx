import React from 'react';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordRequirements from './PasswordRequirements';
import { PasswordValidation } from '../../constants/InputValidation';
import styles from './PasswordVisibilityInputStyles';

export interface PasswordVisibilityInputProps {
  password: string,
  confirmPassword?: string,
  isConfirmPassword: boolean,
  setPassword: Dispatch<SetStateAction<string>>,
  passwordError: string,
  setPasswordError: Dispatch<SetStateAction<string>>,
  passwordPlaceholder: string
}

const PasswordVisibilityInput = (props: PasswordVisibilityInputProps) => {
  const [passwordTouched, setPasswordTouched] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    validatePassword();
  }, [props.isConfirmPassword ? props.confirmPassword : props.password]);

  const validatePassword = () => {
    if (passwordTouched) {
      if (props?.isConfirmPassword) {
        if (!props.confirmPassword?.length) {
          props.setPasswordError("You must confirm your password!");
          return;
        } else if (props?.confirmPassword !== props.password) {
          props.setPasswordError("Passwords do not match!");
          return;
        }
      } else {
        if (!props.password.length) {
          props.setPasswordError("You must enter a password!");
          return;
        } else if (!PasswordValidation.UPPERCASE_REGEX.test(props.password)
        || !PasswordValidation.LOWERCASE_REGEX.test(props.password)
        || !PasswordValidation.NUMBER_REGEX.test(props.password)
        || !PasswordValidation.SPECIAL_CHARACTER_REGEX.test(props.password)
        || props.password.length < 8) {
          props.setPasswordError("Password is invalid!");
          return;
        }
      }
      props.setPasswordError("");
    }
  }

  const onBlurHandler = () => {
    setIsActive(false);
  }

  const onFocusHandler = () => {
    setPasswordTouched(true);
    setIsActive(true);
  }

  const onPasswordVisibleClickHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPasswordVisible}
          placeholder={props.passwordPlaceholder}
          value={props?.isConfirmPassword ? props.confirmPassword : props.password}
          onChangeText={(value) => props.setPassword(value)}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
        />
        <Icon.Button
          style={styles.icon}
          name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
          onPress={onPasswordVisibleClickHandler}
          size={20}
        />
      </View>
      {props.passwordError.length && passwordTouched ? <View><Text>{props.passwordError}</Text></View> : null}
      {(!props.isConfirmPassword && isActive) && <PasswordRequirements password={props.password} passwordError={props.passwordError}></PasswordRequirements>}
    </View>
  );
}

export default PasswordVisibilityInput;