import { colors } from '@colors';
import { AppScreen } from '@components';
import routeNames from '@routeNames';
import { AppButton, AppText } from 'app/components';
import AppPicker from 'app/components/AppPicker';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import SHOPPING_LOTTIE from '@lottie/shopping.json';
import RECYCLING_LOTTIE from '@lottie/recycling.json';

import {
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShopWiselyScreen = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: colors.white }}>
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

        <AppText big bold text="Shop Wisely" />
      </View>
      <View style={{ flex: 0.95, justifyContent: 'center', marginTop: 20, paddingHorizontal: 20 }}>
        <AppText
          h25
          bold
          text={'Tips for a better world'}
          color={colors.primary}
          style={{ marginBottom: 7 }}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 500,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    padding: 20,
    paddingTop: 120,
    overflow: 'hidden',
  },
  tipContainer: {
    width: 250,
    height: 200,
    backgroundColor: colors.lightestGreen,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    marginRight: 10,
  },
  row: {
    paddingHorizontal: 10,
  },
});

export default ShopWiselyScreen;
