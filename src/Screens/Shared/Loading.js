import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
