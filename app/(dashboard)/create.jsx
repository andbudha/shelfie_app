import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Crteate = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        Add a New Book
      </ThemedText>
      <Spacer />
    </ThemedView>
  );
};

export default Crteate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
