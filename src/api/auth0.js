import Auth0 from 'react-native-auth0';
import * as RootNavigation from '../helpers/RootNavigation';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@env';

const auth0 = new Auth0({
  domain: AUTH0_DOMAIN,
  clientId: AUTH0_CLIENT_ID,
});

export const handleLogin = () =>
  auth0.webAuth
    .authorize({
      scope: 'openid email',
    })
    .then(() => RootNavigation.navigate('LoggedIn'))
    .catch(error => console.log('error: ', error));

export const handleLogout = () => auth0.webAuth.clearSession();

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
    .then(() => RootNavigation.navigate('LoggedIn'))
    .catch(error => console.log('error: ', error));
