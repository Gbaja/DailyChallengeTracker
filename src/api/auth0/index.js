import Auth0 from 'react-native-auth0';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
});

export const handleLogin = () =>
  auth0.webAuth
    .authorize({
      scope: 'openid profile email',
    })
    .then(user => user)
    .catch(error => console.log("LOGIN ERROR: ", error))

export const handleLogout = () => auth0.webAuth.clearSession({});

export const handleSignup = ({
  email,
  username,
  password,
  firstName,
  lastName,
}) =>
  auth0.auth
    .createUser({
      email,
      username,
      password,
      given_name: firstName,
      family_name: lastName,
      name: `${firstName} ${lastName}`,
      connection: 'Username-Password-Authentication',
    })
    .then(user => console.log('USER: ', user))
    .catch(error => console.log('error: ', error));

export const sendResetPasswordEmail = email =>
  auth0.auth.resetPassword({
    connection: 'Username-Password-Authentication',
    email,
  });

export const getUserInfo = async accessToken =>
  auth0.auth
    .userInfo({ token: accessToken })
    .then(user => user)
    .catch(error => console.log('Error in get user info: ', error));
