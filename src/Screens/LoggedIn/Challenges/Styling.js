import { StyleSheet } from 'react-native';
import {
  bigSpacing,
  black,
  primaryColor,
  spacing,
  textSize,
  white,
} from '../../../stylingVariables';
import sharedStyling from '../../LoggedOut/SharedStyling';

const styles = StyleSheet.create({
  tabWrapper: {
    flexDirection: 'row',
    margin: bigSpacing,
  },
  tabButtons: active => ({
    borderColor: active ? 'none' : primaryColor,
    borderWidth: 2,
    borderStyle: 'solid',
    marginLeft: 8,
    backgroundColor: active ? primaryColor : white,
  }),
  tabButtonText: active => ({
    color: active ? white : black,
    padding: 10,
    fontSize: 18,
  }),
  noChallengeSvgWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 0.3,
    alignItems: 'center',
    marginTop: spacing,
  },
  noChallengeContainer: {
    alignItems: 'center',
    marginHorizontal: bigSpacing,
    marginVertical: bigSpacing,
  },
  noChallengeSubtitle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'gray',
    marginTop: spacing,
  },
  descriptionTextInput: {
    ...sharedStyling.input,
    height: 150,
  },
  addButtonWrapper: {
    alignItems: 'flex-end',
    marginRight: bigSpacing,
  },
  addButton: {
    backgroundColor: primaryColor,
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 60,
    color: white,
  },
  formStartDateWrapper: {
    flexDirection: 'row',
  },
  formSelectStartDateText: {
    ...sharedStyling.text,
    marginRight: 30,
  },
  datePickerStyling: {
    width: '100%',
  },
  challengeWrapper: {
    marginHorizontal: bigSpacing,
    marginVertical: spacing,
  },
  challengeTitle: {
    fontSize: textSize + 10,
    marginBottom: spacing,
  },
  challengeDescription: {
    fontSize: textSize,
    marginBottom: spacing,
  },
  challengeStartDate: {
    fontSize: textSize - 5,
    marginBottom: spacing,
  },
  challengeDividerLine: {
    borderBottomColor: primaryColor,
    borderBottomWidth: 0.2,
    marginTop: spacing,
  },
  deleteButtonText: {
    color: white,
  },
});

export default styles;
