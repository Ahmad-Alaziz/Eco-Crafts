import { colors } from '@colors';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const AppTextInput = ({ icon, style, width = '100%', ...OtherProps }) => {
  return (
    <View style={[styles.textInputContainer, style, { width }]}>
      {icon && <FontAwesome name={icon} size={24} color={colors.white} style={styles.icon} />}
      <TextInput
        {...OtherProps}
        style={styles.textInput}
        placeholderTextColor={colors.grey}
        selectionColor={colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    borderColor: colors.white,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    width: 35,
  },
  textInput: {
    flex: 1,
    color: colors.primary,
    fontSize: 14,
  },
});

export default AppTextInput;
