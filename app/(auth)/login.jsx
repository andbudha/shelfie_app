import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import { Link } from 'expo-router';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    console.log('Login Form Submitted', email, password);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer height={20} />
        <ThemedText title style={styles.title}>
          Login to Your Account
        </ThemedText>
        <Spacer height={20} />
        <ThemedTextInput
          placeholder="Email"
          style={{ width: '80%' }}
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />
        <Spacer height={20} />
        <ThemedTextInput
          placeholder="Password"
          style={{ width: '80%' }}
          keyboardType="password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Spacer height={20} />
        <ThemedButton onPress={handleSubmit} style={{ width: '80%' }}>
          <Text style={styles.btnText}>Login</Text>
        </ThemedButton>
        <Spacer height={20} />
        <Link href="/register" style={styles.link}>
          <Text style={{ textAlign: 'center' }}>Register instead</Text>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
