import { colors } from '@colors';
import { FONTS } from '@fonts';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'app/components/firebase';
import { useFonts } from 'expo-font';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { OnboardingNavigator } from '../onboarding';

export const Routes = () => {
  const [loaded] = useFonts({
    ...FONTS,
  });

  // TODO: Loading Indicator
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.root}>
      <NavigationContainer>
        <OnboardingNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors },
});
