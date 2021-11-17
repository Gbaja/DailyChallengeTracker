import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import SVGImg from '../../../assets/toDo.svg';
import styles from './Styling';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.svgWrapper}>
        <SVGImg width={300} height={300} style={styles.title} />
      </View>
      <Text style={styles.title}>Daily challenge tracker</Text>
      <Text style={styles.subtitle}>
        Set yourself a challenge to do an activity once a day. Track and log
        your progress using this app.
      </Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
