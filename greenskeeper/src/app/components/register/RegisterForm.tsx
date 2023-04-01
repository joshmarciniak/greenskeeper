import React, { useEffect } from 'react';
import { useState } from 'react';
import { Text, SafeAreaView, TextInput, Button, View } from 'react-native';
import PasswordVisibilityInput from '../ui/PasswordVisibilityInput';
import { EmailValidation } from '../../constants/InputValidation';
import styles from './RegisterFormStyles';
import { Account } from '../../model/Account';

const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [usernameError, setUsernameError] = useState<string>('You must enter a username!');
  const [usernameTouched, setUsernameTouched] = useState<boolean>(false);
  const [usernameIsActive, setUsernameIsActive] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [emailTouched, setEmailTouched] = useState<boolean>(false);
  const [emailIsActive, setEmailIsActive] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('You must enter a password!');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('You must confirm your password!');

  useEffect(() => {
    validateForm();
  }, [username, email])

  const validateForm = () => {
    console.log(usernameError);
    if (!username.length) {
      setUsernameError("You must enter a username!");
    } else {
      setUsernameError("");
    }
    if (!email.length) {
      setEmailError("You must enter an email!");
    } else if (!EmailValidation.EMAIL_REGEX.test(email)) {
      setEmailError("Email invalid. Email should be like example@email.com");
    } else {
      setEmailError("");
    }

  }

  const usernameFocusHandler = () => {
    setUsernameIsActive(true);
  }

  const usernameBlurHandler = () => {
    setUsernameIsActive(false);
    setUsernameTouched(true);
  }

  const emailFocusHandler = () => {
    setEmailIsActive(true);
  }

  const emailBlurHandler = () => {
    setEmailIsActive(false);
    setEmailTouched(true);
  }

  const submitForm = () => {
    fetch('/account/register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@test.com',
        name: 'test account',
      }),
    }).catch(function(error) {
      throw error;
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create an Account</Text>
      </View>
      <Text style={styles.inputLabel}>Create a username</Text>
      <TextInput
        value={username}
        placeholder="Create a username"
        onChangeText={(value) => setUsername(value)}
        onFocus={usernameFocusHandler}
        onBlur={usernameBlurHandler}
      />
      {(usernameError.length && usernameTouched) ? <Text style={styles.errorMessage}>{usernameError}</Text> : null}

      <Text style={styles.inputLabel}>Create a password</Text>
      <PasswordVisibilityInput
        password={password}
        isConfirmPassword={false}
        setPassword={setPassword}
        passwordError={passwordError}
        setPasswordError={setPasswordError}
        passwordPlaceholder="Create a password"
      />

      <Text style={styles.inputLabel}>Confirm your Password</Text>
      <PasswordVisibilityInput
        password={password}
        confirmPassword={confirmPassword}
        isConfirmPassword={true}
        passwordError={confirmPasswordError}
        setPassword={setConfirmPassword}
        setPasswordError={setConfirmPasswordError}
        passwordPlaceholder="Re-enter your password"
      />

      <Text style={styles.inputLabel}>Enter your Email</Text>
      <TextInput
        value={email}
        placeholder="Enter your email"
        onChangeText={(value) => setEmail(value)}
        onFocus={emailFocusHandler}
        onBlur={emailBlurHandler}
      />
      {(emailError.length && emailTouched) ? <Text style={styles.errorMessage}>{emailError}</Text> : null}

      <Button title="Sign Up" onPress={submitForm} />
    </SafeAreaView>
  );
}

export default RegisterForm;