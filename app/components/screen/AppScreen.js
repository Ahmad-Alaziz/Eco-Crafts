import { colors } from '@colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const AppScreen = ({ children, style, wave, notPadded }) => {
  return (
    <>
      {notPadded ? (
        <View style={[styles.screen, style]}>{children}</View>
      ) : (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
      )}
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
