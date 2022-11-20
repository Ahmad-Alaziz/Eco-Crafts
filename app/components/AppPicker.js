import React, { useState, useEffect } from 'react';
import {
  View,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './text/AppText';
import AppPickerItem from './AppPickerItem';
import AppTextInput from './forms/AppTextInput';
import AppButton from './button';
import { colors } from '@colors';

function AppPicker({
  items,
  icon,
  onSelectItem,
  PickerItemComponent = AppPickerItem,
  selectedItems,
  setSelectedItems,
  resetItems,
  placeholder,
  numOfColumns = 3,
  width = '100%',
}) {
  const [modelVisible, setModelVisible] = useState(false);

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchFilterFunction = (query) => {
    setQuery(query);

    const filteredData = data.filter((item) => {
      return item.text.toUpperCase().includes(query.toUpperCase());
    });
    setFilteredData(filteredData);
  };

  useEffect(() => {
    setData(items);
  }, [items, selectedItems, searchFilterFunction]);

  const isItemSelected = (item) => {
    return !!selectedItems.find(({ id }) => item.id === id);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={[styles.container, { width }]}>
          {selectedItems.length ? (
            <AppText
              h3
              style={styles.placeholder}
              text={selectedItems[0].text + '   x' + selectedItems[0].quantity + '  ... etc'}
            />
          ) : (
            <AppText h3 style={styles.placeholder} text={placeholder} />
          )}

          <MaterialCommunityIcons name="chevron-down" size={20} color={colors.primary} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <SafeAreaView
          style={{
            backgroundColor: colors.secondary,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
            <AppButton
              text="Close"
              onPress={() => setModelVisible(false)}
              style={styles.closeBtn}
            />
            <AppButton
              text="Clear Selected"
              onPress={() => {
                setSelectedItems([]);
                resetItems();
              }}
              style={styles.clearBtn}
              textStyle={{ color: colors.primary }}
            />
          </View>

          <View style={styles.searchBar}>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              value={query}
              onChangeText={(queryText) => searchFilterFunction(queryText)}
              placeholder="Search"
              style={{ backgroundColor: colors.lightGreen }}
            />
          </View>
          <FlatList
            data={filteredData && filteredData.length > 0 ? filteredData : data}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numOfColumns}
            columnWrapperStyle={styles.row}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                selected={isItemSelected(item)}
                label={item.text}
                onPress={() => {
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 100,
    backgroundColor: colors.lightGreen,
    borderRadius: 20,
    padding: 15,
    marginHorizontal: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },

  text: {
    flex: 1,
    color: colors.secondary,
  },

  searchBar: {
    margin: 20,
  },

  placeholder: {
    color: colors.secondary,
    flex: 1,
  },

  closeBtn: {
    width: '20%',
    backgroundColor: colors.primary,
    marginRight: 25,
  },
  clearBtn: {
    width: '55%',
    backgroundColor: colors.lightGreen,
    color: colors.primary,
    marginRight: 0,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default AppPicker;
