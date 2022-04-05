import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoggedOutStackScreen from '../Stacks/LoggedOutStack';
import LoggedInStackScreen from '../Stacks/LoggedInStack';
import AuthContext from '../helpers/AuthContext';

import { Loading } from '../Screens/Shared/Loading';
import { handleLogin, handleLogout, getUserInfo } from '../api/auth0';

const Tabs = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthIdToken');
      if (authDataSerialized) {
        const usertoken = JSON.parse(authDataSerialized);
        setToken(usertoken);
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
      await AsyncStorage.setItem('@AuthIdToken', user.idToken);
      const userInfo = await getUserInfo(user.accessToken);
      await AsyncStorage.setItem('@UserInfo', JSON.stringify(userInfo));
      setToken(user.idToken);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await handleLogout();
      await AsyncStorage.removeItem('@AuthIdToken');
      await AsyncStorage.removeItem('@UserInfo');
      setToken(null);
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
      {token ? <LoggedInStackScreen /> : <LoggedOutStackScreen />}
    </AuthContext.Provider>
  );
};

export default Tabs;
