import { colors } from '@colors';
import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from '../text/AppText';

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) {
    return null;
  }
  return <AppText text={error} style={styles.error} h3 />;
};

const styles = StyleSheet.create({
  error: {
    color: colors.red,
    marginBottom: 5,
    marginTop: 2,
  },
});

export default AppErrorMessage;
