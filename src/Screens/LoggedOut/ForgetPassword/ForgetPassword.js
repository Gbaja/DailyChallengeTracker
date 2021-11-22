import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import SVGImg from '../../../assets/forgotPassword.svg';

import sharedStyling from '../SharedStyling';

const ForgetPassword = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');

  return (
    <View style={sharedStyling.container}>
      <View style={sharedStyling.svgWrapper}>
        <SVGImg width={300} height={300} />
      </View>
      <Text style={sharedStyling.title}>Reset your password</Text>
      <Text style={sharedStyling.subtitle}>
        Enter your registered email below to receive password reset instruction
      </Text>
      <TextInput
        style={sharedStyling.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <TouchableOpacity
        style={sharedStyling.primaryButton}
        onPress={() => console.log('Forgetpassword: Send me an email')}>
        <Text style={sharedStyling.primaryButtonText}>Send me an email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;
