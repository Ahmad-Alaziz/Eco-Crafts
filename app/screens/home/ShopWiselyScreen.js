import { colors } from '@colors';
import { AppScreen } from '@components';
import routeNames from '@routeNames';
import { AppButton, AppText } from 'app/components';
import AppPicker from 'app/components/AppPicker';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import SHOPPING_LOTTIE from '@lottie/grocery.json';

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
        <AnimatedLottieView
          source={SHOPPING_LOTTIE}
          loop
          autoPlay
          style={{ width: 200, height: 200 }}
        />
        <AppText big bold text="Shop Wisely" />
      </View>
      <ScrollView style={{ paddingHorizontal: 15 }}>
        <View style={styles.tipContainer}>
          <AppText h25 bold text={'Buy Local'} color={colors.primary} />
          <AppText
            h3
            text="Shopping locally means your money stays in the community, reduces waste from all that parcel and delivery packaging and helps the circular economy."
            color={colors.green}
            style={{ paddingTop: 10 }}
          />
        </View>
        <View style={styles.tipContainer}>
          <AppText h25 bold text={'Buy Less, Buy Better!'} color={colors.primary} />
          <AppText
            h3
            text="Buy less stuff! Rising demands for raw materials to make these things – like oil, metals and water – are damaging the environment. Don’t buy new clothes or gifts unless you think you or the personally receiving them will really love it."
            color={colors.green}
            style={{ paddingTop: 10 }}
          />
        </View>
        <View style={styles.tipContainer}>
          <AppText h25 bold text="Do some brand research" color={colors.primary} />
          <AppText
            h3
            text="Do some brand research, even if it is just the brand website, to get a feel for how the company you are buying from run their business. If you can afford it, try shopping somewhere with good sustainable business practices."
            color={colors.green}
            style={{ paddingTop: 10 }}
          />
        </View>
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 400,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    padding: 20,
    paddingTop: 120,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipContainer: {
    marginTop: 20,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.lightestGreen,
    borderRadius: 20,
  },
  row: {
    paddingHorizontal: 10,
  },
});

export default ShopWiselyScreen;
