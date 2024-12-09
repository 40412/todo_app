import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomIconButton = ({ icon, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};

export default CustomIconButton;

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 18,
  },
  pressed: {
    opacity: 0.72,
  },
});
