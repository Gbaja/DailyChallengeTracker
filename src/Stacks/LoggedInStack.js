import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Challenges from '../Screens/LoggedIn/Challenges';

const LoggedInStack = createNativeStackNavigator();

const LoggedInStackScreen = () => (
  <LoggedInStack.Navigator>
    <LoggedInStack.Screen name="Challenges" component={Challenges} />
  </LoggedInStack.Navigator>
);

export default LoggedInStackScreen;
