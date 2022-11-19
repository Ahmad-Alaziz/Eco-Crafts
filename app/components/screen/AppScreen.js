import { colors } from '@colors';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
const AppScreen = ({ children, style, wave }) => {
  return (
    <>
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
  },
});

export default AppScreen;
