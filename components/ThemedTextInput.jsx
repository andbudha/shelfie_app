import { TextInput, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 15,
          borderRadius: 6,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#ccc',
          backgroundColor: '#fff',
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedTextInput;
