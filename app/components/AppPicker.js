import React, { useState, useEffect } from 'react';
import {
  View,
  Modal,
  SafeAreaView,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
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
  placeholder,
  numOfColumns = 3,
  width = '100%',
}) {
  console.log('items', items);
  const [modelVisible, setModelVisible] = useState(false);

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(items);
  }, [items]);

  const searchFilterFunction = (query) => {
    setQuery(query);

    const filteredData = data.filter((item) => {
      return item.text.toUpperCase().includes(query.toUpperCase());
    });
    setFilteredData(filteredData);
  };

  console.log('selectedIytems', selectedItems);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={[styles.container, { width }]}>
          {selectedItems.length ? (
            <View style={{ flex: 1, flexDirection: 'column' }}>
              {selectedItems.map((selectedItem) => {
                return (
                  <View
                    key={selectedItem.id}
                    style={{
                      height: 30,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <AppText h3 bold style={styles.text} text={selectedItem.text} />
                    <AppText h3 bold style={styles.text} text={' x' + selectedItem.quantity} />
                  </View>
                );
              })}
            </View>
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
          <AppButton text="Close" onPress={() => setModelVisible(false)} style={styles.closeBtn} />

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
    maxHeight: 150,
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
    width: '30%',
    backgroundColor: colors.lightGreen,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default AppPicker;
