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
import { useUser } from '../../hooks/useUser';
import { Colors } from '../../constants/Colors';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { register } = useUser();
  const handleSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer height={20} />
        <ThemedText title style={styles.title}>
          Create an Account
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

        <ThemedButton onPress={handleSubmit}>
          <Text style={styles.btnText}>SignUp</Text>
        </ThemedButton>
        {error && (
          <>
            <Spacer height={20} />
            <ThemedText style={styles.error}>{error}</ThemedText>
          </>
        )}
        <Spacer height={20} />
        <Link href="/login" style={styles.link}>
          <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Register;

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
  link: {
    marginVertical: 10,
    fontStyle: 'italic',
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});
