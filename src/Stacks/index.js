import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoggedOutStackScreen from '../Stacks/LoggedOutStack';
import LoggedInStackScreen from '../Stacks/LoggedInStack';

const Tab = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LoggedOut"
        component={LoggedOutStackScreen}
        options={{
          tabBarLabel: 'LoggedOut',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="LoggedIn"
        initialRouteName="LoggedIn"
        component={LoggedInStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
