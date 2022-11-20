import PLASTIC_LOTTIE from '@lottie/plastic.json';
import RECYCLE_LOTTIE from '@lottie/recycle.json';
import ISO_LOTTIE from '@lottie/iso.json';
import routeNames from '@routeNames';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import AppText from '../../components/text/AppText';
import { colors } from '../../theme/colors';

const mockTitle = 'The Title Goes Here!';
const mockSubTitle =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserun. Amet minim mollit non deserun ';

const OnboardingScreen = ({ navigation }) => {
  const completeOnBoarding = () => {
    navigation.navigate(routeNames.AUTH_NAV);
  };
  return (
    <Onboarding
      titleStyles={styles.title}
      subTitleStyles={styles.subTitle}
      onDone={completeOnBoarding}
      onSkip={completeOnBoarding}
      pages={[
        {
          backgroundColor: colors.primary,
          title: (
            <AppText
              h1
              bold
              color={colors.secondary}
              style={{ textAlign: 'center' }}
              text={mockTitle}
            />
          ),
          subtitle: <AppText light style={styles.subTitle} text={mockSubTitle} />,
          image: (
            <AnimatedLottieView
              source={RECYCLE_LOTTIE}
              style={styles.lottieContainer}
              loop
              autoPlay
            />
          ),
        },
        {
          backgroundColor: colors.primary,
          title: <AppText h1 bold color={colors.secondary} text={mockTitle} />,
          subtitle: <AppText h3 light style={styles.subTitle} text={mockSubTitle} />,
          image: (
            <AnimatedLottieView
              source={ISO_LOTTIE}
              style={{ width: 240, height: 240 }}
              loop
              autoPlay
            />
          ),
        },

        {
          backgroundColor: colors.primary,
          title: <AppText h1 bold color={colors.secondary} text={mockTitle} />,
          subtitle: <AppText h3 light style={styles.subTitle} text={mockSubTitle} />,
          image: (
            <AnimatedLottieView
              source={PLASTIC_LOTTIE}
              style={styles.lottieContainer}
              loop
              autoPlay
            />
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  subTitle: {
    width: 320,
    textAlign: 'center',
    marginTop: 10,
  },
  lottieContainer: {
    width: 220,
    height: 220,
  },
});

export default OnboardingScreen;
