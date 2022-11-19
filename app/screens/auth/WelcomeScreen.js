import { colors } from '@colors';
import { AppScreen } from '@components';
import { AppButton, AppText } from 'app/components';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

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
        <AppText huge bold text="WASTE CRAFTER" style={{ textAlign: 'center' }} />
      </View>
      <View style={{ marginBottom: 70 }}>
        <AppButton
          text="Start"
          style={{ backgroundColor: colors.secondary, color: colors.primar, width: 250 }}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default WelcomeScreen;
