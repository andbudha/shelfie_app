import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.homeLink}>
        Back Home
      </Link>
    </View>
  );
};

export default About;

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
