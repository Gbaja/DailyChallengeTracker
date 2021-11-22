import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import sharedStyling from '../SharedStyling';
import { primaryColor } from '../../../stylingVariables';
import styles from './Styling';

const Signup = ({ navigation }) => {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [isSelected, setSelection] = useState(false);

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
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
        <Text style={sharedStyling.text}>
          By signing up, you agree for us store your email so you can use to
          gain access and be informed about any account changes.
        </Text>
        <TouchableOpacity
          style={sharedStyling.primaryButton}
          onPress={() => console.log('Signup: Get started')}>
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
