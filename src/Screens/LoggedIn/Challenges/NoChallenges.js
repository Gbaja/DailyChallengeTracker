import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import SVGImg from '../../../assets/noData.svg';
import sharedStyling from '../../LoggedOut/SharedStyling';
import AddChallengeButton from './AddChallengeButton';
import styles from './Styling';

const Nochallenge = ({ navigation, status }) => (
  <View>
    <View style={styles.noChallengeSvgWrapper}>
      <SVGImg width={300} height={300} />
    </View>
    <View style={styles.noChallengeContainer}>
      <Text style={sharedStyling.title}>No {status} challenges yet</Text>
      <Text style={styles.noChallengeSubtitle}>
        Start a new challenge today by clicking on the button below
      </Text>
    </View>
    {(status === 'ongoing' || status === 'upcoming') && (
      <AddChallengeButton navigation={navigation} />
    )}
  </View>
);

export default Nochallenge;
