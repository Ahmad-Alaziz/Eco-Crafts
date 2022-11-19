import { colors } from '@colors';
import { AppScreen } from '@components';
import routeNames from '@routeNames';
import { AppButton, AppText } from 'app/components';
import AppPicker from 'app/components/AppPicker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const items = [
  { id: 0, text: 'Plastic Bottle - S', icon: 'bottle-wine' },
  { id: 1, text: 'Plastic Bottle - M', icon: 'bottle-wine' },
  { id: 2, text: 'Plastic Bottle - L', icon: 'bottle-wine' },

  { id: 3, text: 'Glass Bottle- S', icon: 'bottle-wine' },
  { id: 4, text: 'Glass Bottle - M', icon: 'bottle-wine' },
  { id: 5, text: 'Glass Bottle - L', icon: 'bottle-wine' },

  { id: 6, text: 'Cardboard- S', icon: 'bottle-wine' },
  { id: 7, text: 'Cardboard - M', icon: 'bottle-wine' },
  { id: 8, text: 'Cardboard - L', icon: 'bottle-wine' },

  { id: 9, text: 'Rope- S', icon: 'bottle-wine' },
  { id: 10, text: 'Rope - M', icon: 'bottle-wine' },
  { id: 11, text: 'Rope - L', icon: 'bottle-wine' },

  { id: 12, text: 'Wood Plank- S', icon: 'bottle-wine' },
  { id: 13, text: 'Wood Plank - M', icon: 'bottle-wine' },
  { id: 14, text: 'Wood Plank - L', icon: 'bottle-wine' },
];

const DashboardScreen = ({ navigation }) => {
  return (
    <AppScreen style={{ backgroundColor: colors.white }}>
      <View style={styles.cardContainer}>
        <AppText h1 color={colors.primary} bold text="Generate Craft" />
        <View style={{ width: 300 }}>
          <AppPicker placeholder="Choose Materials" items={items} />
        </View>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: { flex: 1, justifyContent: 'center' },
});

export default DashboardScreen;
