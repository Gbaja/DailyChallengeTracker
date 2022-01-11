import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from './src/helpers/RootNavigation';
import Tabs from './src/Stacks';

const App: () => Node = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
