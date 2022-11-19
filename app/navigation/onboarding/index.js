import { createStackNavigator } from '@react-navigation/stack';
import routeNames from '@routeNames';
import { OnboardingScreen } from '@screens';
import React from 'react';

import { AuthNavigator } from '../auth';

const Stack = createStackNavigator();

export const OnboardingNavigator = () => (
  <Stack.Navigator
    initialRouteName={routeNames.ONBOARDING}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={routeNames.ONBOARDING} component={OnboardingScreen} />
    <Stack.Screen name={routeNames.AUTH_NAV} component={AuthNavigator} />
  </Stack.Navigator>
);
