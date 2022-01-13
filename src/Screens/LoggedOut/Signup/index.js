import React, { useContext, useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import sharedStyling from '../SharedStyling';
import { handleSignup } from '../../../api/auth0';
import AuthContext from '../../../helpers/AuthContext';

const Signup = ({ navigation }) => {
  const [username, onChangeUsername] = useState('');
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const { signIn } = useContext(AuthContext);

  const signUpButtonDisabled =
    !email || !password || !firstName || !lastName || !username;

  const handleSubmit = () => {
    if (!email || !password || !firstName || !lastName || !username) {
      Alert.alert('Please make sure all fields have been completed.');
    } else {
      handleSignup({
        email,
        username,
        password,
        firstName,
        lastName,
      }).then(() =>
        Alert.alert(
          'Finish registration...',
          'Please check your email to verify your account.',
          [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
        ),
      );
    }
  };

  return (
    <ScrollView>
      <View style={sharedStyling.container}>
        <Text style={sharedStyling.title} testID="title">
          Get started on tracking your challenges
        </Text>
        <Text style={sharedStyling.subtitle}>
          Enter your name, email address and password to join.
        </Text>
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="User name"
          testID="username"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="First name"
          testID="firstName"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last name"
          testID="lastName"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          testID="email"
        />
        {/* TODO: Add confirm password field */}
        {/* TODO: Add show/hide password functionality */}
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          testID="password"
        />
        <Text style={sharedStyling.text}>
          By signing up, you agree for us store your email so you can use to
          gain access and be informed about any account changes.
        </Text>
        <TouchableOpacity
          style={sharedStyling.primaryButton}
          onPress={handleSubmit}
          disabled={signUpButtonDisabled}
          testID="signupButton">
          <Text style={sharedStyling.primaryButtonText}>Get started</Text>
        </TouchableOpacity>
        {/* TODO: Build a login form page in-app */}
        <TouchableOpacity
          style={sharedStyling.secondaryButton}
          onPress={signIn}>
          <Text style={sharedStyling.secondaryButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;
