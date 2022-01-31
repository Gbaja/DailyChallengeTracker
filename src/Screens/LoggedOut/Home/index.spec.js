import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import Home from '.';

import '@testing-library/jest-native/extend-expect';
import { renderComponentWithAuthContext } from '../../../helpers/testing';

describe('Loggedout home', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const Component = () => <Home navigation={navigation} />;

  const signIn = jest.fn();

  test('Renders', () => {
    const { getByTestId } = renderComponentWithAuthContext(Component, {
      signIn,
    });

    const title = getByTestId('title');

    expect(title).toHaveTextContent('Daily challenge tracker');
  });

  test('Signup button navigates to sign up page', () => {
    const { getByTestId } = renderComponentWithAuthContext(Component, {
      signIn,
    });

    const signupButton = getByTestId('signupButton');

    fireEvent.press(signupButton);

    expect(navigation.navigate).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith('Sign up');
  });

  test('Forget password button navigates to sign up page', () => {
    const { getByTestId } = renderComponentWithAuthContext(Component, {
      signIn,
    });

    const forgetPasswordButton = getByTestId('forgetPasswordButton');

    fireEvent.press(forgetPasswordButton);

    expect(navigation.navigate).toHaveBeenCalled();
    expect(navigation.navigate).toHaveBeenCalledWith('Forget Password');
  });

  test('Log in button calls sign in', () => {
    const { getByTestId } = renderComponentWithAuthContext(Component, {
      signIn,
    });

    const loginButton = getByTestId('loginButton');

    fireEvent.press(loginButton);

    expect(signIn).toHaveBeenCalled();
  });
});
