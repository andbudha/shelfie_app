import { StyleSheet, Text, useColorScheme } from "react-native";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import Spacer from "../../../components/Spacer";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedCard from "../../../components/ThemedCard";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constants/Colors";

const BookDetails = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const { id } = useLocalSearchParams();
  const { getBookById, deleteBookById } = useBooks();
  const [book, setBook] = useState(null);
  const router = useRouter();

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

  async function handleDelete() {
    await deleteBookById(id);
    setBook(null);
    router.replace("/books");
  }
  return (
    <ThemedView safe style={styles.container}>
      <Spacer height={50} />
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>Book title: {book.title}</ThemedText>
        <ThemedText style={styles.author}>Written by {book.author}</ThemedText>
        <Spacer height={10} />
        <ThemedText style={styles.description}>{book.description}</ThemedText>
      </ThemedCard>
      <ThemedButton style={styles.deleteBtn} onPress={handleDelete}>
        <Text style={styles.btnText}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    width: "100%",
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
  card: {
    width: "90%",
    marginHorizontal: "5%",
    padding: 10,
    marginBottom: 20,
  },
  deleteBtn: {
    padding: 10,
    borderRadius: 5,
    width: "90%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});
