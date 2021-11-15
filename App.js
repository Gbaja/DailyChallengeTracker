import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import SVGImg from './src/assets/toDo.svg';

const App: () => Node = () => {
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
        onPress={() => console.log('Log in')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => console.log('Sign up')}>
        <Text style={styles.signupButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  svgWrapper: {
    // borderColor: 'red',
    // borderWidth: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 25,
    },
    shadowOpacity: 0.3,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 22,
    marginTop: 30,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#F50057',
    padding: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
    },
    shadowOpacity: 0.3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22,
  },
  signupButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  signupButtonText: {
    fontSize: 20,
  },
});

export default App;
