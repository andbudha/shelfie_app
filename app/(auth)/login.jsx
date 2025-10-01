import { StyleSheet, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';

const Login = () => {
  const handleSubmit = () => {
    console.log('Login Form Submitted');
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer height={20} />
      <ThemedText title style={styles.title}>
        Login to Your Account
      </ThemedText>
      <Spacer height={20} />
      <ThemedText style={{ borderWidth: 1, borderBottomWidth: 1, padding: 10 }}>
        Login Form
      </ThemedText>
      <Spacer height={20} />
      <ThemedButton onPress={handleSubmit}>
        <Text style={styles.btnText}>Login</Text>
      </ThemedButton>
      <Spacer height={20} />
      <Link href="/register" style={styles.link}>
        <Text style={{ textAlign: 'center' }}>Register instead</Text>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
  },
});
