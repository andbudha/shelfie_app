import { StyleSheet } from "react-native";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import ThemedLoader from "../../../components/ThemedLoader";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const { getBookById } = useBooks();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function loadBook() {
      const bookData = await getBookById(id);
      setBook(bookData);
    }
    loadBook();
  }, [id]);

  if (!book) {
    return (
      <ThemedView safe style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }
  return (
    <ThemedView safe style={styles.container}>
      <Spacer height={50} />
      <ThemedText style={styles.title}>Book title: {book.title}</ThemedText>
      <ThemedText style={styles.author}>Written by {book.author}</ThemedText>

      <Spacer height={10} />
      <ThemedText style={styles.description}>{book.description}</ThemedText>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "steretch",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
  },
});
