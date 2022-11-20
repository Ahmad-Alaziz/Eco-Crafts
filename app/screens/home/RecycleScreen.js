import { colors } from '@colors';
import { AppScreen } from '@components';
import { AppText } from 'app/components';
import React from 'react';
import SHOPPING_LOTTIE from '@lottie/recycling.json';

import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const RecycleScreen = ({ navigation }) => {
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
          <AppText h25 bold text={'Location Dependent?'} color={colors.primary} />
          <AppText
            h3
            text="The only way to know for sure what is recycled in your town or city or county is to do your research.  There are certain items that are pretty much ubiquitously OK, like PET #1 bottles (water and soda bottles) but many items vary from place to place."
            color={colors.green}
            style={{ paddingTop: 10 }}
          />
        </View>
        <View style={styles.tipContainer}>
          <AppText h25 bold text={'Learn your numbers!'} color={colors.primary} />
          <AppText
            h3
            text="Wait, what’s PET (or PETE) #1? Start by learning your numbers. Some plastics are worse than others (for the environment, or for human health or both). And some are easily recycled and some are not. Learn which ones are the worst AND which are recyclable near you. You can only learn what to avoid and what to recycle if you understand what the numbers inside the recycling symbol mean."
            color={colors.green}
            style={{ paddingTop: 10 }}
          />
        </View>
        <View style={styles.tipContainer}>
          <AppText h25 bold text="Be Realistic" color={colors.primary} />
          <AppText
            h3
            text="No wishcycling, ok? Don’t just throw everything in the bin and hope for the best. Somewhere between 16% – 25% of what we are putting in the bins is not recyclable. When we do this we contaminate waste streams and junk up recycling machinery"
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

export default RecycleScreen;
