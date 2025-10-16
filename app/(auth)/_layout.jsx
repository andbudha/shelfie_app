import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import GuestOnly from '../../components/auth/GuestOnly';

const AuthLayout = () => {
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack screenOptions={{ animation: 'none' }} />
    </GuestOnly>
  );
};

export default AuthLayout;
