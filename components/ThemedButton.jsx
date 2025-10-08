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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  pressed: {
    opacity: 0.8,
  },
});
