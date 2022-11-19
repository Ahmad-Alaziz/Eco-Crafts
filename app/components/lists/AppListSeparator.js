import { colors } from '@colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

function AppListSeparator({ style }) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.surface3,
  },
});

export default AppListSeparator;
