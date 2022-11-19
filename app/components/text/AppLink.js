import { colors } from '@colors';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

const AppLink = ({ text, onPress, color, underline }) => {
  return (
    <TouchableOpacity onPress={onPress} style={underline && styles.border}>
      <AppText
        text={text}
        h4
        color={color ? color : colors.white}
        italic
        style={underline && styles.textUnderlined}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  border: { borderBottomWidth: 1, borderColor: colors.white },
});

export default AppLink;
