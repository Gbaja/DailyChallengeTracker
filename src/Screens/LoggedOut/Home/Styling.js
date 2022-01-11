import { StyleSheet } from 'react-native';
import {
  bigSpacing,
  primaryColor,
  spacing,
  textSize,
} from '../../../stylingVariables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing,
    justifyContent: 'center',
  },
  homeSVGWrapper: {
    shadowOffset: {
      height: 25,
    },
  },
  forgotPassword: {
    color: primaryColor,
    textAlign: 'center',
    marginVertical: bigSpacing,
    fontSize: textSize,
  },
});

export default styles;
