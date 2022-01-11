import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedOutHome from '../Screens/LoggedOut/Home';
import Signup from '../Screens/LoggedOut/Signup';
import ForgetPassword from '../Screens/LoggedOut/ForgetPassword/ForgetPassword';

const LoggedOutStack = createNativeStackNavigator();

const LoggedOutStackScreen = () => (
  <LoggedOutStack.Navigator>
    <LoggedOutStack.Screen
      name="Home"
      component={LoggedOutHome}
      options={{ headerShown: false }}
    />
    <LoggedOutStack.Screen name="Sign up" component={Signup} />
    {/* TO DO: Implement forgot password functionality */}
    <LoggedOutStack.Screen name="Forget Password" component={ForgetPassword} />
  </LoggedOutStack.Navigator>
);

export default LoggedOutStackScreen;
