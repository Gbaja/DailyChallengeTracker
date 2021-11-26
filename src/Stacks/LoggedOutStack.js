import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedOutHome from '../Screens/LoggedOut/Home';
import Login from '../Screens/LoggedOut/Login';
import Signup from '../Screens/LoggedOut/Signup';
import ForgetPassword from '../Screens/LoggedOut/ForgetPassword/ForgetPassword';

const LoggedOutStack = createNativeStackNavigator();

const LoggedOutStackScreen = () => (
  <LoggedOutStack.Navigator>
    <LoggedOutStack.Screen
      name="LoggedOutHome"
      component={LoggedOutHome}
      options={{ headerShown: false }}
    />
    <LoggedOutStack.Screen name="Log in" component={Login} />
    <LoggedOutStack.Screen name="Sign up" component={Signup} />
    <LoggedOutStack.Screen name="Forget Password" component={ForgetPassword} />
  </LoggedOutStack.Navigator>
);

export default LoggedOutStackScreen;
