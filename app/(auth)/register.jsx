import { StyleSheet, Text } from 'react-native';
import ThemedView from '../../components/ThemedView';
import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import { Link } from 'expo-router';
import ThemedButton from '../../components/ThemedButton';

const Register = () => {
  const handleSubmit = () => {
    console.log('Register Form Submitted');
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer height={20} />
      <ThemedText title style={styles.title}>
        Create an Account
      </ThemedText>
      <Spacer height={20} />
      <ThemedText style={{ borderWidth: 1, borderBottomWidth: 1, padding: 10 }}>
        Register Form
      </ThemedText>
      <Spacer height={20} />
      <ThemedButton onPress={handleSubmit}>
        <Text style={styles.btnText}>SignUp</Text>
      </ThemedButton>
      <Spacer height={20} />
      <Link href="/login" style={styles.link}>
        <ThemedText style={{ textAlign: 'center' }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
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
});
