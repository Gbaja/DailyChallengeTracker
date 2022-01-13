import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import ForgetPassword from '.';
import { sendResetPasswordEmail } from '../../../api/auth0';

import '@testing-library/jest-native/extend-expect';
import { fireTextChangeEvent } from '../../../helpers/testing';

jest.mock('../../../api/auth0');

describe('ForgetPassword', () => {
  test('Renders', () => {
    const { getByTestId } = render(<ForgetPassword />);

    const title = getByTestId('title');

    expect(title).toHaveTextContent('Reset your password');
  });

  test('Sends password reset email when button is clicked', () => {
    sendResetPasswordEmail.mockResolvedValueOnce({});
    const { getByTestId } = render(<ForgetPassword />);

    const email = getByTestId('email');
    const button = getByTestId('button');

    fireTextChangeEvent(email, 'test@email.com');
    fireEvent.press(button);

    expect(sendResetPasswordEmail).toHaveBeenCalled();
    expect(sendResetPasswordEmail).toHaveBeenCalledWith('test@email.com');
  });

  // TODO: test that Alert gets rendered and user get navigated to home page
});
