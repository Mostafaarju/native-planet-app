import { StyleSheet, Text } from 'react-native';
import { presets } from '../Text.preset';

function TextComponent({ children, preset = 'default', style }) {
  const textStyle = StyleSheet.compose(presets[preset], style);
  return <Text style={textStyle}>{children}</Text>;
}

export default TextComponent;
