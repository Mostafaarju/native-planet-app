import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import TextComponent from '../components/textComponent/TextComponent';
import { PLANET_LIST } from '../data/PlanetList';
import { colors } from '../theme/Colors';
import { spacing } from '../theme/spacing';

const PlanetItem = ({ item }) => {
  const navigation = useNavigation();
  const { name, color } = item;
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details', { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[styles.circle, { backgroundColor: color }]} />
        <TextComponent preset='h4' style={styles.itemName}>
          {name}
        </TextComponent>
      </View>
      <EvilIcons name='chevron-right' size={24} color='white' />
    </Pressable>
  );
};

function Home({ navigation }) {
  const [planetList, setPlanetList] = useState(PLANET_LIST);

  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  const searchFilter = text => {
    const filterList = PLANET_LIST.filter(item => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();

      return itemName.indexOf(userTypedText) > -1;
    });
    setPlanetList(filterList);
  };

  return (
    <View style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder='Type the planet name'
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={text => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={planetList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
    padding: spacing[5],
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  circle: { width: 30, height: 30, borderRadius: 50 },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  },
  searchInput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
    textAlign: 'center',
  },
});

export default Home;
