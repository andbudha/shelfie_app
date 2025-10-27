import { FlatList, Pressable, StyleSheet } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/Colors";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import Spacer from "../../components/Spacer";
import { useRouter } from "expo-router";

const Books = () => {
  const { books } = useBooks();
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.heading}>
        Your Reading List
      </ThemedText>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={(item) => (
          <Pressable onPress={() => router.push(`/books/${item.item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.item.title}</ThemedText>
              <ThemedText style={styles.author}>
                Written by {item.item.author}
              </ThemedText>
              <ThemedText style={styles.description}>
                {item.item.description}
              </ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "stretch",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
  },
  description: {
    fontSize: 16,
  },
});
