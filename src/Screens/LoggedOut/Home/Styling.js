import { StyleSheet } from 'react-native';
import { spacing } from '../../../stylingVariables';

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
});

export default styles;
