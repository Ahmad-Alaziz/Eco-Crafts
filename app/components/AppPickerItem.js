import { colors } from '@colors';
import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

import AppText from './text/AppText';

function AppPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {item.photoUrl && <Image style={styles.image} source={{ uri: item.photoUrl }} />}
        <AppText style={styles.text} text={item.text} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default AppPickerItem;
