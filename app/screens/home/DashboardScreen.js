import { colors } from '@colors';
import { AppScreen } from '@components';
import routeNames from '@routeNames';
import { AppButton, AppText } from 'app/components';
import AppPicker from 'app/components/AppPicker';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import SHOPPING_LOTTIE from '@lottie/shopping.json';

import { FlatList, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

const startItems = [
  {
    id: 0,
    text: 'Plastic Bottle - S',
    photoUrl: 'https://i.ibb.co/XYb6Cvv/plastic-bottle-m.png',
    quantity: 0,
  },
  {
    id: 1,
    text: 'Plastic Bottle - M',
    photoUrl: 'https://i.ibb.co/hgChfgx/plastic-bottle-s.png',
    quantity: 0,
  },
  {
    id: 2,
    text: 'Plastic Bottle - L',
    photoUrl: 'https://i.ibb.co/Hn89k50/plastic-bottle-l.png',
    quantity: 0,
  },

  { id: 3, text: 'Glass Bottle - S', photoUrl: 'https://i.ibb.co/kK8L7SM/bottle.png', quantity: 0 },
  { id: 4, text: 'Glass Bottle - M', photoUrl: 'https://i.ibb.co/kK8L7SM/bottle.png', quantity: 0 },
  { id: 5, text: 'Glass Bottle - L', photoUrl: 'https://i.ibb.co/kK8L7SM/bottle.png', quantity: 0 },

  { id: 6, text: 'Cardboard - S', photoUrl: 'https://i.ibb.co/BscyWZR/box.png', quantity: 0 },
  { id: 7, text: 'Cardboard - M', photoUrl: 'https://i.ibb.co/BscyWZR/box.png', quantity: 0 },
  { id: 8, text: 'Cardboard - L', photoUrl: 'https://i.ibb.co/BscyWZR/box.png', quantity: 0 },

  { id: 9, text: 'Rope - S', photoUrl: 'https://i.ibb.co/0mw6CBM/rope.png', quantity: 0 },
  { id: 10, text: 'Rope - M', photoUrl: 'https://i.ibb.co/SKHJh60/rope-1.png', quantity: 0 },
  { id: 11, text: 'Rope - L', photoUrl: 'https://i.ibb.co/QQpD6Fc/rope-2.png', quantity: 0 },

  { id: 12, text: 'Wood Plank - S', photoUrl: 'https://i.ibb.co/tLbrGVc/floor.png', quantity: 0 },
  { id: 13, text: 'Wood Plank - M', photoUrl: 'https://i.ibb.co/wcg0y7C/wood.png', quantity: 0 },
  { id: 14, text: 'Wood Plank - L', photoUrl: 'https://i.ibb.co/rfD6dWy/board.png', quantity: 0 },
];

const tips = [
  { id: 0, title: 'Shop Wisely!' },
  { id: 1, title: ' Go to Zero Waste!' },
];
const DashboardScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState(startItems);

  const updateState = (objects, setObjects, id) => {
    console.log('id', id);
    const newState = objects.map((obj) => {
      if (obj.id === id) {
        return { ...obj, quantity: obj.quantity + 1 };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setObjects(newState);
  };

  return (
    <AppScreen notPadded style={{ backgroundColor: colors.white }}>
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
        <AppText big bold text="Generate Craft" />
        <AppText
          h4
          light
          style={{ marginVertical: 10 }}
          text="Pick whatever materials you have laying around your house and our magical generator will come up with a fascinating DIY project for you to enjoy!"
        />
        <View style={{ width: 300, alignItems: 'center' }}>
          <View style={{ marginVertical: 10 }}>
            <AppPicker
              onSelectItem={(item) => {
                if (item.quantity > 0) {
                  updateState(selectedItems, setSelectedItems, item.id);
                } else {
                  const newItem = { ...item, quantity: item.quantity + 1 };
                  setSelectedItems([...selectedItems, newItem]);
                }

                updateState(items, setItems, item.id);
              }}
              placeholder="Choose Materials"
              selectedItems={selectedItems}
              items={items}
            />
          </View>
        </View>
        <AppButton
          text="Generate!"
          color={colors.lightGreen}
          style={{ width: 250, position: 'absolute', bottom: 20, left: 60 }}
        />
      </View>
      <View style={{ flex: 0.9, justifyContent: 'center', marginTop: 20, paddingHorizontal: 20 }}>
        <AppText
          h25
          bold
          text={'Tips for a better world'}
          color={colors.primary}
          style={{ marginBottom: 7 }}
        />

        <ScrollView horizontal>
          <View style={styles.tipContainer}>
            <AnimatedLottieView source={SHOPPING_LOTTIE} />
            <AppText
              h1
              bold
              color={colors.green}
              text={tips[0].title}
              style={{ textAlign: 'center' }}
            />
          </View>
          <View style={styles.tipContainer}>
            <AppText
              h1
              bold
              color={colors.green}
              text={tips[1].title}
              style={{ textAlign: 'center' }}
            />
          </View>
        </ScrollView>
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1.5,
    backgroundColor: colors.primary,
    width: '100%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    padding: 20,
    paddingTop: 80,
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

export default DashboardScreen;
