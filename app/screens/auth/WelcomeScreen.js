import { colors } from '@colors';
import { AppScreen } from '@components';
import { AppButton, AppText } from 'app/components';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import BULB_LOTTIE from '@lottie/bulb.json';
import AnimatedLottieView from 'lottie-react-native';
import routeNames from '@routeNames';

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: colors.primary }}>
      <ImageBackground
        source={require('../../../assets/images/overlays/overlay.png')}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.15,
        }}
      />
      <View style={styles.cardContainer}>
        <AnimatedLottieView
          source={BULB_LOTTIE}
          style={styles.lottieContainer}
          loop={false}
          autoPlay
        />
        <AppText huge bold text="ECO CRAFTS" style={{ textAlign: 'center' }} />
      </View>
      <View style={{ marginBottom: 70 }}>
        <AppButton
          text="Start"
          onPress={() => navigation.navigate(routeNames.HOME_NAV)}
          style={{ backgroundColor: colors.secondary, color: colors.primary, width: 250 }}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  lottieContainer: {
    width: 200,
    height: 200,
  },
});

export default WelcomeScreen;
