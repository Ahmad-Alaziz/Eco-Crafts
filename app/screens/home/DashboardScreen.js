import { colors } from '@colors';
import { AppScreen } from '@components';
import { AppButton, AppText } from 'app/components';
import AppPicker from 'app/components/AppPicker';
import React, { useEffect, useState } from 'react';
import SHOPPING_LOTTIE from '@lottie/shopping.json';
import RECYCLING_LOTTIE from '@lottie/recycling.json';

import {
  Alert,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import ShopWiselyScreen from './ShopWiselyScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RecycleScreen from './RecycleScreen';
import Tutorial from './Tutorial';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db, getTutorials } from 'app/components/firebase';

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
  { id: 1, title: 'Recycling 101' },
];

const DashboardScreen = ({ navigation }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState(startItems);
  const [currentTutorial, setCurrentTutorial] = useState({});

  console.log('sleected', selectedItems);
  const getTutorial = async () => {
    return await getTutorials().then(async (tutorials) => {
      let finalTut;
      await tutorials.map((tutorial) => {
        console.log('tuorial', tutorial);
        tutorial.materials.map(async (material) => {
          console.log('hey', material);
          const el = await selectedItems.find(({ text }) =>
            text.toUpperCase().includes(material.toUpperCase())
          );
          if (el) {
            console.log('Found!');
            finalTut = tutorial;
          }
        });
      });
      console.log('finalTut', finalTut);
      if (!finalTut) {
        return 'none';
      }
      if (finalTut && finalTut.materials.length > selectedItems.length) {
        return { ...finalTut, closest: true };
      }

      return finalTut;
    });
  };

  const generate = async () => {
    await getTutorial().then((tut) => {
      console.log('tut', tut);

      if (tut === 'none') {
        Alert.alert(
          "Sorry! we couldn't find a tutorial with your selected materials, try selecting others!"
        );
      }

      if (typeof tut === 'object' && !tut?.closest) {
        setCurrentTutorial(tut);
        setTutorialModalVisible(true);
      }

      if (tut?.closest) {
        Alert.alert(
          "Unfortunately we didn't find a tutorial with your exact materials, but here is the closest one to that!"
        );
        setCurrentTutorial(tut);
        setTutorialModalVisible(true);
        console.log('this is the closest');
      }
    });
  };

  const updateState = (objects, setObjects, id) => {
    const newState = objects.map((obj) => {
      if (obj.id === id) {
        return { ...obj, quantity: obj.quantity + 1 };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setObjects(newState);
  };

  const [shoppingModalVisible, setShoppingModalVisible] = useState(false);
  const [recycleModalVisible, setRecycleModalVisible] = useState(false);
  const [tutorialModalVisible, setTutorialModalVisible] = useState(false);

  /**
   *  

  
   */

  useEffect(() => {
    getTutorials().then((snap) => {});
  }, []);

  const resetItems = () => {
    setItems(startItems);
  };

  return (
    <>
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
          <View style={{ width: 350, alignItems: 'center' }}>
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
                setSelectedItems={setSelectedItems}
                placeholder="Choose Materials"
                selectedItems={selectedItems}
                items={items}
                resetItems={resetItems}
                startItems={startItems}
                setItems={setItems}
              />
            </View>
          </View>
          <AppButton
            text="Generate!"
            onPress={() => generate()}
            color={colors.lightGreen}
            style={{ width: 250, position: 'absolute', bottom: 10, left: 60 }}
          />
        </View>
        <View
          style={{ flex: 0.95, justifyContent: 'center', marginTop: 20, paddingHorizontal: 20 }}>
          <AppText
            h25
            bold
            text={'Tips for a better world'}
            color={colors.primary}
            style={{ marginBottom: 7 }}
          />

          <ScrollView horizontal>
            <TouchableOpacity
              style={styles.tipContainer}
              onPress={() => setShoppingModalVisible(true)}>
              <AnimatedLottieView
                source={SHOPPING_LOTTIE}
                loop
                autoPlay
                style={{ width: 150, height: 150 }}
              />
              <AppText
                h1
                bold
                color={colors.green}
                text={tips[0].title}
                style={{ textAlign: 'center' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tipContainer}
              onPress={() => setRecycleModalVisible(true)}>
              <AppText
                h1
                bold
                color={colors.green}
                text={tips[1].title}
                style={{ textAlign: 'center' }}
              />
              <AnimatedLottieView
                source={RECYCLING_LOTTIE}
                loop
                autoPlay
                style={{ width: 150, height: 150 }}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <Modal animationType="slide" transparent={false} visible={shoppingModalVisible}>
          <View style={{ position: 'absolute', top: 40, left: 20, zIndex: 9000 }}>
            <TouchableOpacity
              onPress={() => setShoppingModalVisible(false)}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.lightGreen,
              }}>
              <MaterialCommunityIcons name="chevron-left" size={50} color={colors.secondary} />
            </TouchableOpacity>
          </View>

          <ShopWiselyScreen />
        </Modal>

        <Modal animationType="slide" transparent={false} visible={recycleModalVisible}>
          <View style={{ position: 'absolute', top: 40, left: 20, zIndex: 9000 }}>
            <TouchableOpacity
              onPress={() => setRecycleModalVisible(false)}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.lightGreen,
              }}>
              <MaterialCommunityIcons name="chevron-left" size={50} color={colors.secondary} />
            </TouchableOpacity>
          </View>

          <RecycleScreen />
        </Modal>

        <Modal animationType="slide" transparent={false} visible={tutorialModalVisible}>
          <View style={{ position: 'absolute', top: 40, left: 20, zIndex: 9000 }}>
            <TouchableOpacity
              onPress={() => setTutorialModalVisible(false)}
              style={{
                width: 50,
                height: 50,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.lightGreen,
              }}>
              <MaterialCommunityIcons name="chevron-left" size={50} color={colors.secondary} />
            </TouchableOpacity>
          </View>

          <Tutorial tut={currentTutorial} />
        </Modal>
      </AppScreen>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1.15,
    backgroundColor: colors.primary,
    width: '100%',
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    padding: 20,
    paddingTop: 100,
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
