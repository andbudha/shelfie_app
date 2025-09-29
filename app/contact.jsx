import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Link href="/" style={styles.homeLink}>
        Back Home
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  homeLink: {
    marginVertical: 20,
    borderBottomWidth: 1,
    fontStyle: 'italic',
  },
});
