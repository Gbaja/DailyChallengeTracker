import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedOutHome from './src/Screens/LoggedOut/Home';
import Login from './src/Screens/LoggedOut/Login';
import Signup from './src/Screens/LoggedOut/Signup';
import ForgetPassword from './src/Screens/LoggedOut/ForgetPassword/ForgetPassword';
const LoggedOutHomeStack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <LoggedOutHomeStack.Navigator>
        <LoggedOutHomeStack.Screen
          name="LoggedOutHome"
          component={LoggedOutHome}
          options={{ headerShown: false }}
        />
        <LoggedOutHomeStack.Screen name="Log in" component={Login} />
        <LoggedOutHomeStack.Screen name="Sign up" component={Signup} />
        <LoggedOutHomeStack.Screen
          name="Forget Password"
          component={ForgetPassword}
        />
      </LoggedOutHomeStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
