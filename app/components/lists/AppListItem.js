import { colors } from '@colors';
import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../text/AppText';

function AppListItem({
  text,
  subTitle,
  onPress,
  renderRightActions,
  RightComponent,
  LeftComponent,
  style,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.surface2} onPress={onPress}>
        <View style={[styles.container, style]}>
          {LeftComponent}
          <View style={styles.detailsContainer}>
            <AppText text={text} color={colors.white} numberOfLines={1} h3 bold />
            {subTitle ? (
              <AppText text={subTitle} numberOfLines={1} h4 color={colors.white} />
            ) : null}
          </View>
          {RightComponent}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default AppListItem;
