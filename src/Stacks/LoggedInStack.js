import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Challenges from '../Screens/LoggedIn/Challenges';
import AddChallenge from '../Screens/LoggedIn/Challenges/AddChallenge';

const LoggedInStack = createNativeStackNavigator();

const LoggedInStackScreen = () => (
  <LoggedInStack.Navigator>
    <LoggedInStack.Screen name="Challenges" component={Challenges} />
    <LoggedInStack.Screen name="Add Challenge" component={AddChallenge} />
  </LoggedInStack.Navigator>
);

export default LoggedInStackScreen;
