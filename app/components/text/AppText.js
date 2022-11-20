import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

import { colors } from '../../theme/colors';
import { FONT_TYPES } from '../../theme/fonts';

const { width } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const scale = (size) => (width / guidelineBaseWidth) * size;

function AppText({
  huge,
  big,
  h1,
  h2,
  h25,
  h3,
  h4,
  h5,
  p,
  bold,
  light,
  medium,
  thin,
  italic,
  underline,
  text,
  children,
  style,
  color = colors.secondary,
  ...otherProps
}) {
  const content = text || children;
  return (
    <Text
      style={[
        styles.text,
        { color },
        huge && { fontSize: scale(65) },
        big && { fontSize: scale(50) },
        h1 && { fontSize: scale(25) },
        h2 && { fontSize: scale(20) },
        h25 && { fontSize: scale(18) },
        h3 && { fontSize: scale(14) },
        h4 && { fontSize: scale(12) },
        h5 && { fontSize: scale(10) },
        p && { fontSize: scale(8) },
        bold && { fontFamily: FONT_TYPES.bold },
        light && { fontFamily: FONT_TYPES.light, letterSpacing: 1.1 },
        medium && { fontFamily: FONT_TYPES.medium },
        thin && { fontFamily: FONT_TYPES.thin },
        italic && { fontStyle: 'italic' },
        underline && { textDecorationLine: 'underline' },
        style,
      ]}
      {...otherProps}>
      {content}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { fontFamily: FONT_TYPES.regular },
});

export default AppText;
