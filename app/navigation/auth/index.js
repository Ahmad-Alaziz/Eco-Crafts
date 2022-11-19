import { colors } from '@colors';
import { createStackNavigator } from '@react-navigation/stack';
import routeNames from '@routeNames';
import { WelcomeScreen } from '@screens';
import { FONT_TYPES } from 'app/theme/fonts';
import React from 'react';

import HomeNavigator from '../home';

const Stack = createStackNavigator();

const authScreenOptions = {
  headerBackTitle: 'NEXUS',
  headerTitle: '',

  headerStyle: { backgroundColor: colors.black, height: 100 },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontFamily: FONT_TYPES.regular,
    fontSize: 19,
    letterSpacing: 0.5,
  },
};

export const AuthNavigator = () => (
  <Stack.Navigator initialRouteName={routeNames.WELCOME} screenOptions={{ ...authScreenOptions }}>
    <Stack.Screen
      name={routeNames.WELCOME}
      options={{
        headerShown: false,
      }}
      component={WelcomeScreen}
    />
    <Stack.Screen
      name={routeNames.HOME_NAV}
      options={{
        headerShown: false,
      }}
      component={HomeNavigator}
    />
  </Stack.Navigator>
);
