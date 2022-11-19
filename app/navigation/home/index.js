import { colors } from '@colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import routeNames from '@routeNames';
import { DashboardScreen } from '@screens';
import { FONT_TYPES } from 'app/theme/fonts';
import React from 'react';
import { StyleSheet } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={colors.white}
      inactiveColor={colors.lightGrey}
      barStyle={styles.barStyle}
      sceneContainerStyle={{ backgroundColor: colors.primary }}
      initialRouteName={routeNames.DASHBOARD}
      shifting>
      <Tab.Screen
        name={routeNames.DASHBOARD}
        component={DashboardScreen}
        options={() => ({
          labelStyle: { margin: 5 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={27} color={color} style={styles.icon} />
          ),
          tabBarLabel: 'Home',
        })}
      />
      <Tab.Screen
        name={routeNames.ONBOARDING}
        component={DashboardScreen}
        options={() => ({
          labelStyle: { margin: 5 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={27} color={color} style={styles.icon} />
          ),
          tabBarLabel: 'Dashboard2',
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigatorStyle: {
    backgroundColor: colors.black,
    borderTopWidth: 1,
    borderTopColor: colors.surface1,
  },
  barStyle: { backgroundColor: colors.primary, height: 65 },
  indicatorStyle: {
    backgroundColor: colors.primary,
  },
  iconStyle: {
    width: 30,
    height: 28,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 2,
  },
  labelStyle: {
    fontSize: 12,
    fontFamily: FONT_TYPES.regular,
    margin: 0,
    textTransform: 'none',
  },
});

export default HomeNavigator;

/**
 * 
 *   
   
 */
