import { colors } from '@colors';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from '../text/AppText';

const AppButton = ({ text, onPress, color = colors.primary, disabled, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }, style]}
      onPress={onPress}
      disabled={disabled}>
      <AppText text={text} h3 bold style={[styles.text, textStyle]} />
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: colors.primary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    textTransform: 'uppercase',
    color: colors.secondary,
  },
});
