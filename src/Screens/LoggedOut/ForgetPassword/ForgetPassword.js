import React, { useState } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { sendResetPasswordEmail } from '../../../api/auth0';

import SVGImg from '../../../assets/forgotPassword.svg';

import sharedStyling from '../SharedStyling';

const ForgetPassword = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');

  return (
    <View style={sharedStyling.container}>
      <View style={sharedStyling.svgWrapper}>
        <SVGImg width={300} height={300} />
      </View>
      <Text style={sharedStyling.title} testID="title">
        Reset your password
      </Text>
      <Text style={sharedStyling.subtitle}>
        Enter your registered email below to receive password reset instruction
      </Text>
      <TextInput
        style={sharedStyling.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={sharedStyling.primaryButton}
        onPress={() => {
          console.log(email);
          return sendResetPasswordEmail(email)
            .then(() => {
              Alert.alert(
                'Reset password email sent',
                'Please check your email for link to reset your password.',
                [{ text: 'OK', onPress: () => navigation.navigate('Home') }],
              );
            })
            .catch(error => console.log('ERRORRR: ', error));
        }}>
        <Text style={sharedStyling.primaryButtonText}>Send me an email</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPassword;
