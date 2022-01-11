import React from 'react';
import { render } from '@testing-library/react-native';
import ForgetPassword from './ForgetPassword';

import '@testing-library/jest-native/extend-expect';

describe('ForgetPassword', () => {
  test('Renders', () => {
    const { getByTestId } = render(<ForgetPassword />);

    const title = getByTestId('title');

    expect(title).toHaveTextContent('Reset your password');
  });
});
