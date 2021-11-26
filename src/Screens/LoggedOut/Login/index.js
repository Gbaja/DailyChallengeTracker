import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './Styling';
import sharedStyling from '../SharedStyling';
import { handleLogin } from '../../../api/auth0';

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={sharedStyling.container}>
      <Text style={sharedStyling.title}>Keep completing your challenge</Text>
      <Text style={sharedStyling.subtitle}>
        Enter your email address and password to gain access to your account.
      </Text>
      <TextInput
        style={sharedStyling.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="email"
      />
      <TextInput
        style={sharedStyling.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="password"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Forget Password')}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sharedStyling.primaryButton}
        onPress={handleLogin}>
        <Text style={sharedStyling.primaryButtonText}>Get Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sharedStyling.secondaryButton}
        onPress={() => navigation.navigate('Login: Sign up')}>
        <Text style={sharedStyling.secondaryButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
