import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const AuthLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ animation: 'none' }} />
    </>
  );
};

export default AuthLayout;
