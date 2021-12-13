import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import AuthContext from '../../../helpers/AuthContext';

const Profile = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <ScrollView>
      <View>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <Text>PROFILE</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
