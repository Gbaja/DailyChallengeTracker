import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import SVGImg from '../../../assets/toDo.svg';
import styles from './Styling';
import sharedStyling from '../SharedStyling';
import AuthContext from '../../../helpers/AuthContext';

const Home = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{ ...sharedStyling.svgWrapper, ...styles.homeSVGWrapper }}>
        <SVGImg width={300} height={300} />
      </View>
      <Text style={sharedStyling.title} testID="title">
        Daily challenge tracker
      </Text>
      <Text style={sharedStyling.subtitle}>
        Set yourself a challenge to do an activity once a day. Track and log
        your progress using this app.
      </Text>
      <TouchableOpacity
        style={sharedStyling.primaryButton}
        onPress={() => signIn()}
        testID="loginButton">
        <Text style={sharedStyling.primaryButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sharedStyling.secondaryButton}
        onPress={() => navigation.navigate('Sign up')}
        testID="signupButton">
        <Text style={sharedStyling.secondaryButtonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Forget Password')}
        testID="forgetPasswordButton">
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
