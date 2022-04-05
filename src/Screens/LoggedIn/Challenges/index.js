import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { getChallenges } from '../../../api/dailyChallengeTracker';
import AuthContext from '../../../helpers/AuthContext';
import AddChallengeButton from './AddChallengeButton';
import Nochallenge from './NoChallenges';
import styles from './Styling';

const Challenges = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  const [challenges, setChallenges] = useState([]);
  const [status, setStatus] = useState('ongoing');

  useEffect(() => {
    //TO DO: Filter by ongoing is not being set: need to query by date
    getChallenges(status)
      .then(res => setChallenges(res))
      .catch(error => console.log('ERROR: ', error));
  }, [status]);

  return (
    <ScrollView>
      <View style={styles.tabWrapper}>
        <TouchableOpacity
          style={styles.tabButtons(status === 'ongoing')}
          onPress={() => setStatus('ongoing')}>
          <Text style={styles.tabButtonText(status === 'ongoing')}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButtons(status === 'upcoming')}
          onPress={() => setStatus('upcoming')}>
          <Text style={styles.tabButtonText(status === 'upcoming')}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButtons(status === 'completed')}
          onPress={() => setStatus('completed')}>
          <Text style={styles.tabButtonText(status === 'completed')}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {challenges && challenges.length > 0 ? (
        <>
          {challenges.map(({ title, description, startDate }, index) => (
            <View key={title} style={styles.challengeWrapper}>
              <Text style={styles.challengeTitle}>{title}</Text>
              <Text style={styles.challengeDescription}>{description}</Text>
              <Text style={styles.challengeStartDate}>
                Start date: {new Date(startDate).toDateString()}
              </Text>
              {challenges.length !== index + 1 && (
                <View style={styles.challengeDividerLine} />
              )}
            </View>
          ))}
          <TouchableOpacity onPress={() => signOut()}>
            <Text>Log out</Text>
          </TouchableOpacity>
          <AddChallengeButton navigation={navigation} />
        </>
      ) : (
        // TODO: Learn more about navigation and see if there is a way to navigate without passing as prop here
        <Nochallenge navigation={navigation} status={status} />
      )}
    </ScrollView>
  );
};

export default Challenges;
