import { StyleSheet, Text, View, Image } from 'react-native';
import LogoImage from '../assets/favicon.png';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.image} />

      <Text style={styles.title}>Home Page</Text>
      <Text style={{ fontSize: 16, color: 'red', marginTop: 20 }}>
        Reading List App
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Card</Text>
      </View>

      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default Home;

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
  card: {
    marginTop: 20,
    width: 200,
    height: 200,
    backgroundColor: '#c3c3c3',
    boxShadow: '4px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
  },
  link: {
    marginVertical: 20,
    borderBottomWidth: 1,
    fontStyle: 'italic',
  },
});
