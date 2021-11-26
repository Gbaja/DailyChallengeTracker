import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../Screens/LoggedIn/Profile';

const LoggedInStack = createNativeStackNavigator();

const LoggedInStackScreen = () => (
  <LoggedInStack.Navigator>
    <LoggedInStack.Screen name="Profile" component={Profile} />
  </LoggedInStack.Navigator>
);

export default LoggedInStackScreen;
