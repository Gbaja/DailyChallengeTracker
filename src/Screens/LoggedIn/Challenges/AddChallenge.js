import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { createChallenge } from '../../../api/dailyChallengeTracker';

import sharedStyling from '../../LoggedOut/SharedStyling';

const AddChallenge = ({ navigation }) => {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [days, onChangeDays] = useState('');
  // TODO: Set default start date as today
  const [startDate, onChangeStartDate] = useState('');

  const buttonDisabled = !description || !days || !title;

  const handleSubmit = async () => {
    if (!description || !days || !title) {
      Alert.alert('Please make sure all fields have been completed.');
    } else {
      const token = await AsyncStorage.getItem('@AuthToken');
      await createChallenge(JSON.parse(token), {
        title,
        description,
        days,
        startDate,
        userEmail: 'gbajaf@yahoo.uk',
      });
    }
  };

  return (
    <ScrollView>
      <View style={sharedStyling.container}>
        <Text style={sharedStyling.title} testID="title">
          Start a new challenge today!
        </Text>
        <Text style={sharedStyling.subtitle}>
          Enter the details about the challenge
        </Text>
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Title"
          testID="title"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Description"
          testID="description"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeDays}
          value={days}
          placeholder="Number of days"
          testID="days"
          keyboardType="numeric"
        />
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeStartDate}
          value={startDate}
          placeholder="Start date"
          testID="startDate"
        />
        <TouchableOpacity
          style={sharedStyling.primaryButton}
          onPress={handleSubmit}
          disabled={buttonDisabled}
          testID="submit-button">
          <Text style={sharedStyling.primaryButtonText}>Submit challenge</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddChallenge;
