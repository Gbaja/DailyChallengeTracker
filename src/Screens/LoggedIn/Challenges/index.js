import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import SVGImg from '../../../assets/noData.svg';
import { bigSpacing, primaryColor, spacing } from '../../../stylingVariables';
import sharedStyling from '../../LoggedOut/SharedStyling';

const Profile = ({ navigation }) => {
  // const { signOut } = useContext(AuthContext);
  return (
    <ScrollView>
      <View>
        <View style={styling.svgWrapper}>
          <SVGImg width={300} height={300} />
        </View>
        <View style={styling.container}>
          <Text style={sharedStyling.title}>No challenges yet</Text>
          <Text style={styling.subtitle}>
            Start a new challenge today by clicking on the button below
          </Text>
        </View>
        <View style={styling.buttonWrapper}>
          <TouchableOpacity
            style={styling.button}
            onPress={() => navigation.navigate('Add Challenge')}>
            <Text style={styling.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={() => signOut()}>
          <Text>Log out</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

const styling = StyleSheet.create({
  svgWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 0.3,
    alignItems: 'center',
    marginTop: bigSpacing,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: bigSpacing,
    marginVertical: bigSpacing,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'gray',
    marginTop: spacing,
  },
  buttonWrapper: {
    alignItems: 'flex-end',
    marginRight: bigSpacing,
    marginTop: bigSpacing,
  },
  button: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 60,
    color: 'white',
  },
});

export default Profile;
