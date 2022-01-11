import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoggedOutStackScreen from '../Stacks/LoggedOutStack';
import LoggedInStackScreen from '../Stacks/LoggedInStack';
import AuthContext from '../helpers/AuthContext';

import { Loading } from '../Screens/Shared/Loading';
import { handleLogin, handleLogout } from '../api/auth0';

const Tabs = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthToken');
      if (authDataSerialized) {
        const userAccessToken = JSON.parse(authDataSerialized);
        setAccessToken(userAccessToken);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const signIn = async () => {
    try {
      setLoading(true);
      const user = await handleLogin();
      await AsyncStorage.setItem(
        '@AuthToken',
        JSON.stringify(user.accessToken),
      );
      setAccessToken(user.accessToken);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await handleLogout();
      await AsyncStorage.removeItem('@AuthToken');
      setAccessToken(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {accessToken ? <LoggedInStackScreen /> : <LoggedOutStackScreen />}
    </AuthContext.Provider>
  );
};

export default Tabs;
