import { fireEvent } from '@testing-library/react-native';
import Signup from '.';

import '@testing-library/jest-native/extend-expect';
import { handleSignup } from '../../../api/auth0';
import {
  fireTextChangeEvent,
  renderComponentWithAuthContext,
} from '../../../helpers/testing';

jest.mock('../../../api/auth0');
// Resolves console warning: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation.
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Signup', () => {
  const signIn = jest.fn();
  const formData = {
    email: 'test@email.com',
    username: 'Test-username',
    password: 'Test-password',
    firstName: 'Test-firstName',
    lastName: 'Test-lastName',
  };

  const fillInFields = getByTestId => {
    const username = getByTestId('username');
    const firstName = getByTestId('firstName');
    const lastName = getByTestId('lastName');
    const email = getByTestId('email');
    const password = getByTestId('password');

    fireTextChangeEvent(username, formData.username);
    fireTextChangeEvent(firstName, formData.firstName);
    fireTextChangeEvent(lastName, formData.lastName);
    fireTextChangeEvent(email, formData.email);
    fireTextChangeEvent(password, formData.password);
  };

  test('Renders', () => {
    const { getByTestId } = renderComponentWithAuthContext(Signup, { signIn });
    const title = getByTestId('title');

    expect(title).toHaveTextContent('Get started on tracking your challenges');
  });

  test('Renders signup button as disabled on first load', () => {
    const { getByTestId } = renderComponentWithAuthContext(Signup, { signIn });
    const signupButton = getByTestId('signupButton');

    expect(signupButton).toBeDisabled();
  });

  test('Enables signup button when inputs are all field in', () => {
    const { getByTestId } = renderComponentWithAuthContext(Signup, { signIn });
    fillInFields(getByTestId);

    const signupButton = getByTestId('signupButton');
    expect(signupButton).toBeEnabled();
  });

  test('Calls handle signup when sign up button is clicked', async () => {
    handleSignup.mockResolvedValueOnce();
    const { getByTestId } = renderComponentWithAuthContext(Signup, { signIn });

    const signupButton = getByTestId('signupButton');

    fillInFields(getByTestId);
    fireEvent.press(signupButton);

    expect(handleSignup).toHaveBeenCalled();
    expect(handleSignup).toHaveBeenCalledWith(formData);
  });

  // TODO: test that Alert gets rendered and user get navigated to home page
});
