import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Styling';

const AddChallengeButton = ({ navigation }) => (
  <View style={styles.addButtonWrapper}>
    <TouchableOpacity
      style={styles.addButton}
      onPress={() => navigation.navigate('Add Challenge')}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
  </View>
);

export default AddChallengeButton;
