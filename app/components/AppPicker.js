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
  selectedItem,
  placeholder,
  numOfColumns = 3,
  width = '100%',
}) {
  const [modelVisible, setModelVisible] = useState(false);

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(items);
  }, []);

  const searchFilterFunction = (query) => {
    setQuery(query);

    const filteredData = data.filter((item) => {
      return item.text.toUpperCase().includes(query.toUpperCase());
    });
    setFilteredData(filteredData);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons name={icon} style={styles.icon} size={20} color={colors.grey} />
          )}
          {selectedItem ? (
            <AppText
              h3
              bold
              style={styles.text}
              text={selectedItem.value ? selectedItem.value : selectedItem.text}
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
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <PickerItemComponent
                icon={item.icon}
                item={item}
                label={item.text}
                onPress={() => {
                  setModelVisible(false);
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
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 3,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },

  text: {
    flex: 1,
    color: colors.primary,
    textAlign: 'center',
  },

  searchBar: {
    margin: 20,
  },

  placeholder: {
    color: colors.primary,
    flex: 1,
  },

  closeBtn: {
    width: '30%',
    backgroundColor: colors.lightGreen,
  },
});

export default AppPicker;
