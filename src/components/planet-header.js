import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/Colors';
import { spacing } from '../theme/spacing';
import TextComponent from './textComponent/TextComponent';

export default function PlanetHeader({ backBtn, title = 'THE PLANETS' }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{ marginRight: spacing[4] }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name='md-chevron-back-circle-outline'
            size={24}
            color='white'
          />
        </Pressable>
      )}
      <TextComponent preset='h2'>{title}</TextComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
