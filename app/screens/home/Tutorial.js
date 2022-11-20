import { colors } from '@colors';
import { AppScreen } from '@components';
import { AppText } from 'app/components';
import React from 'react';
import SHOPPING_LOTTIE from '@lottie/recycling.json';

import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import VideoPlayer from 'expo-video-player';
import { ResizeMode } from 'expo-av';

const Tutorial = ({ tut }) => {
  return (
    <AppScreen style={{ backgroundColor: colors.primary }}>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={require('../../../assets/images/overlays/overlay.png')}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.15,
            overflow: 'hidden',
          }}
        />

        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: ResizeMode.COVER,
            source: {
              uri: tut.url,
            },
          }}
        />
        <AppText big bold text="Shop Wisely" />
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <AppText big bold text={tut.title} style={{ alignSelf: 'center', marginTop: 10 }} />
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 600,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipContainer: {
    marginTop: 20,
    padding: 15,
    width: 300,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.lightestGreen,
    borderRadius: 20,
  },
  row: {
    paddingHorizontal: 10,
  },
});

export default Tutorial;
