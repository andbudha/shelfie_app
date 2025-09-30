import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
      <Spacer height={20} />
      <Link href="/" style={styles.homeLink}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeLink: {
    borderBottomWidth: 1,
    fontStyle: 'italic',
  },
});
