import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { getChallenges } from '../../../api/dailyChallengeTracker';
import AuthContext from '../../../helpers/AuthContext';
import Nochallenge from './NoChallenges';
import styles from './Styling';

const Challenges = ({ navigation }) => {
  const { signOut } = useContext(AuthContext);
  const [upcomingChallenges, setUpcomingChallenges] = useState([]);
  const [status, setStatus] = useState('ongoing');

  useEffect(() => {
    getChallenges(status)
      .then(res => setUpcomingChallenges(res))
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
      {upcomingChallenges.length > 0 ? (
        <>
          <View>
            {upcomingChallenges.map(({ title, description }) => (
              <View key={title}>
                <Text>{title}</Text>
                <Text>{description}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity onPress={() => signOut()}>
            <Text>Log out</Text>
          </TouchableOpacity>
        </>
      ) : (
        // TODO: Learn more about navigation and see if there is a way to navigate without passing as prop here
        <Nochallenge navigation={navigation} status={status} />
      )}
    </ScrollView>
  );
};

export default Challenges;
