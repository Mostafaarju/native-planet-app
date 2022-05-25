import { StyleSheet, View } from 'react-native';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/Colors';

export default function Details() {
  return (
    <View style={styles.container}>
      <PlanetHeader backBtn='true' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
