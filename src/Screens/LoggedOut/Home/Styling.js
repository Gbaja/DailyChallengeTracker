import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  svgWrapper: {
    // borderColor: 'red',
    // borderWidth: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 25,
    },
    shadowOpacity: 0.3,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    fontSize: 22,
    marginTop: 30,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#F50057',
    padding: 10,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
    },
    shadowOpacity: 0.3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22,
  },
  signupButton: {
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
  signupButtonText: {
    fontSize: 20,
  },
});

export default styles;
