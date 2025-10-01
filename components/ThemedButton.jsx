import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedButton = ({ style, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
      {...props}
    />
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  btn: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
});
