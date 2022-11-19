import { colors } from '@colors';
import Loading from '@lottie/Loading.json';
import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppScreen from './screen/AppScreen';
import AppText from './text/AppText';

function ActivityIndicator({ source = Loading, props, height = 256, width = 256 }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.container}>
        <View style={{ height, width }}>
          <LottieView source={source} loop autoPlay {...props} />
        </View>
        <AppText color={colors.primary} text="Loading.." style={styles.loadingText} />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: { marginTop: -30, marginBottom: 100 },
});

export default ActivityIndicator;
