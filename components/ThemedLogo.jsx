import { StyleSheet, useColorScheme, Image } from 'react-native';
import LightLogo from '../assets/logo_light.png';
import DarkLogo from '../assets/logo_dark.png';

const ThemedLogo = (props) => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;
  return <Image source={logo} {...props} />;
};

export default ThemedLogo;

const styles = StyleSheet.create({});
