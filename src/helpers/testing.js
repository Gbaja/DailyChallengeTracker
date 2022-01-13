import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import AuthContext from './AuthContext';

export const renderComponentWithAuthContext = (Component, contextValue) =>
  render(
    <AuthContext.Provider value={contextValue}>
      <Component />
    </AuthContext.Provider>,
  );

export const fireTextChangeEvent = (input, value) =>
  fireEvent.changeText(input, value);
