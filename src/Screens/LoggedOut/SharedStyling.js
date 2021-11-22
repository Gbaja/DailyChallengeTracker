import { StyleSheet } from 'react-native';
import { primaryColor, textSize, spacing } from '../../stylingVariables';

const sharedStyling = StyleSheet.create({
  container: {
    marginHorizontal: spacing,
    marginVertical: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 24,
    marginTop: spacing,
  },
  text: {
    fontSize: textSize,
  },
  input: {
    fontSize: textSize,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginVertical: spacing,
    height: 60,
    borderRadius: 10,
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: `${primaryColor}`,
    padding: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
    },
    shadowOpacity: 0.3,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: textSize,
  },
  secondaryButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  secondaryButtonText: {
    fontSize: textSize,
  },
  svgWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
    },
    shadowOpacity: 0.3,
    alignItems: 'center',
  },
});

export default sharedStyling;
