import { StyleSheet, Text, View } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.heading}>
        Your Email
      </ThemedText>
      <Spacer />
      <ThemedText>Time to start reading some books...</ThemedText>
      <Spacer />
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'stretch',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
