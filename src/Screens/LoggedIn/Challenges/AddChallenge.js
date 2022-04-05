import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

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
import styles from './Styling';

const AddChallenge = ({ navigation }) => {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [days, onChangeDays] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const buttonDisabled = !description || !days || !title;

  const handleSubmit = async () => {
    if (!description || !days || !title) {
      Alert.alert('Please make sure all fields have been completed.');
    } else {
      const token = await AsyncStorage.getItem('@AuthIdToken');
      const userInfo = await AsyncStorage.getItem('@UserInfo');
      await createChallenge(token, {
        title,
        description,
        days,
        startDate,
        userEmail: JSON.parse(userInfo).email,
        status: 'upcoming',
      });
      navigation.navigate('Challenges');
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
          style={styles.descriptionTextInput}
          onChangeText={onChangeDescription}
          value={description}
          multiline={true}
          placeholder="Description"
          testID="description"
        />
        {/* TODO: only number for this input */}
        <TextInput
          style={sharedStyling.input}
          onChangeText={onChangeDays}
          value={days}
          placeholder="Number of days"
          testID="days"
          keyboardType="numeric"
        />
        <View style={styles.formStartDateWrapper}>
          <Text style={styles.formSelectStartDateText}>Select start date:</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={startDate}
            mode="date"
            onChange={(event, selectedDate) =>
              setStartDate(
                new Date(new Date(selectedDate).setHours(0, 0, 0, 0)),
              )
            }
            // TODO: default time is not set to midnight
            minimumDate={new Date(new Date().setHours(24, 0, 0, 0))}
            style={styles.datePickerStyling}
          />
        </View>
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
