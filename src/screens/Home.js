import { EvilIcons } from '@expo/vector-icons';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import TextComponent from '../components/textComponent/TextComponent';
import { PLANET_LIST } from '../data/PlanetList';
import { colors } from '../theme/Colors';
import { spacing } from '../theme/spacing';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        renderItem={({ item, index }) => {
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
        }}
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
  circle: { width: 30, height: 30, borderRadius: 30 },
  list: {
    padding: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  },
});

export default Home;
