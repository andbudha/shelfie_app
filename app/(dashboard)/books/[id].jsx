import { StyleSheet } from "react-native";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import { useLocalSearchParams } from "expo-router";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <ThemedView safe style={styles.container}>
      <Spacer />
      <ThemedText>Book Details: {id}</ThemedText>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "steretch",
  },
});
