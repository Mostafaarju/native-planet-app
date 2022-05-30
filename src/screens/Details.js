import { FontAwesome } from '@expo/vector-icons';
import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import TextComponent from '../components/textComponent/TextComponent';
import {
  PlanetEarth,
  PlanetJupiter,
  PlanetMars,
  PlanetMercury,
  PlanetNeptune,
  PlanetSaturn,
  PlanetUranus,
  PlanetVenus,
} from '../svg/PlanetIndex';
import { colors } from '../theme/Colors';
import { spacing } from '../theme/spacing';

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <TextComponent preset='small' style={{ textTransform: 'uppercase' }}>
        {title}
      </TextComponent>
      <TextComponent preset='h2'>{value}</TextComponent>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const renderImage = () => {
    switch (name) {
      case 'mercury':
        return <PlanetMercury />;

      case 'venus':
        return <PlanetVenus />;

      case 'earth':
        return <PlanetEarth />;

      case 'mars':
        return <PlanetMars />;

      case 'jupiter':
        return <PlanetJupiter />;

      case 'saturn':
        return <PlanetSaturn />;

      case 'uranus':
        return <PlanetUranus />;

      case 'neptune':
        return <PlanetNeptune />;
    }
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <View style={styles.container}>
      <PlanetHeader backBtn='true' />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>
        <View style={styles.detailsView}>
          <TextComponent preset='h1' style={styles.name}>
            {name}
          </TextComponent>
          <TextComponent style={styles.description}>
            {description}
          </TextComponent>
          <Pressable onPress={onPressLink} style={styles.source}>
            <TextComponent>Source: </TextComponent>
            <TextComponent preset='h4' style={styles.wikipedia}>
              wikipedia
            </TextComponent>
            <FontAwesome
              style={styles.wikipediaLink}
              name='external-link-square'
              size={24}
              color='white'
            />
          </Pressable>
        </View>

        <View style={{ height: 40 }} />

        <PlanetSection title='ROTATION TIME' value={rotationTime} />
        <PlanetSection title='REVOLUTION TIME' value={revolutionTime} />
        <PlanetSection title='RADIUS' value={radius} />
        <PlanetSection title='AVG TEMP.' value={avgTemp} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItem: 'center',
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[4],
    justifyContent: 'center',
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  wikipediaLink: {
    marginLeft: spacing[2],
  },
  planetSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
