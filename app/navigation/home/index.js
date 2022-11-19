import { colors } from '@colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import routeNames from '@routeNames';
import {} from '@screens';
import { FONT_TYPES } from 'app/theme/fonts';
import React from 'react';
import { StyleSheet } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={colors.white}
      inactiveColor={colors.grey}
      barStyle={styles.barStyle}
      sceneContainerStyle={{ backgroundColor: colors.primary }}
      initialRouteName={routeNames.PROFILE_NAV}
      shifting></Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigatorStyle: {
    backgroundColor: colors.black,
    borderTopWidth: 1,
    borderTopColor: colors.surface1,
  },
  barStyle: { backgroundColor: colors.black, height: 65 },
  indicatorStyle: {
    backgroundColor: colors.surface3,
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
      <Tab.Screen
        name={routeNames.PROFILE}
        component={}
        options={() => ({
          labelStyle: { margin: 5 },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={27} color={color} style={styles.icon} />
          ),
          tabBarLabel: 'Profile',
        })}
      />
 */
