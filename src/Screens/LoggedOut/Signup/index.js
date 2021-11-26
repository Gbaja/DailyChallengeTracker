import React, { useState } from 'react';

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

const Signup = ({ navigation }) => {
  const [username, onChangeUsername] = useState('');
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password || !firstName || !lastName || !username) {
      Alert.alert('Please make sure all fields have been completed.');
    } else {
      handleSignup({
        email,
        password,
        firstName,
        lastName,
        username,
      });
    }
  };

  return (
    <ScrollView>
      <View style={sharedStyling.container}>
        <Text style={sharedStyling.title}>
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
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder="First name"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder="Last name"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={sharedStyling.text}>
          By signing up, you agree for us store your email so you can use to
          gain access and be informed about any account changes.
        </Text>
        <TouchableOpacity
          style={sharedStyling.primaryButton}
          onPress={handleSubmit}>
          <Text style={sharedStyling.primaryButtonText}>Get started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={sharedStyling.secondaryButton}
          onPress={() => navigation.navigate('Signup: Log in')}>
          <Text style={sharedStyling.secondaryButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;
