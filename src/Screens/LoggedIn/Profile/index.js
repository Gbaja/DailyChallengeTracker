import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import * as RootNavigation from '../../../helpers/RootNavigation';

const Profile = ({ navigation }) => {
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
        <TouchableOpacity
          onPress={() => RootNavigation.navigate('LoggedOutHome')}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
