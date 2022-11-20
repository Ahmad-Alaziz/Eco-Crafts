import { colors } from '@colors';
import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

import AppText from './text/AppText';

function AppPickerItem({ item, onPress }) {
  const selected = !!item.quantity;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {item.photoUrl && <Image style={styles.image} source={{ uri: item.photoUrl }} />}
          {selected && (
            <AppText
              style={{ marginLeft: 10 }}
              h4
              text={'x' + item.quantity}
              color={colors.black}
            />
          )}
        </View>
        <AppText style={[styles.text]} bold={selected} text={item.text} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default AppPickerItem;
