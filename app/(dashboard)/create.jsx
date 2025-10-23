import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { useRouter } from "expo-router";
import { useState } from "react";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";

const Crteate = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { createBook } = useBooks();
  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) {
      alert("Please fill in all fields");
    }
    setLoading(true);
    await createBook({ title, author, description });

    //reset form
    setTitle("");
    setAuthor("");
    setDescription("");

    //redirect
    router.replace("/books");
    setLoading(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <ThemedText title style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Spacer />
        <ThemedTextInput
          placeholder="Book Title"
          onChangeText={setTitle}
          style={{ width: "80%" }}
          value={title}
        />
        <Spacer />
        <ThemedTextInput
          placeholder="Author"
          onChangeText={setAuthor}
          style={{ width: "80%" }}
          value={author}
        />
        <Spacer />
        <ThemedTextInput
          placeholder="Book Description"
          onChangeText={setDescription}
          style={{ width: "80%", height: 200, textAlignVertical: "top" }}
          value={description}
          multiline={true}
        />
        <Spacer />
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: "white" }}>
            {loading ? "Adding..." : "Add Book"}
          </Text>
        </ThemedButton>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Crteate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
