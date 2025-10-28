import { createContext, useEffect, useState } from "react";
import { client, databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const dataBaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const booksCollectionId = process.env.EXPO_PUBLIC_APPWRITE_BOOKS_COLLECTION_ID;

export const BooksContext = createContext();
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();
  async function getBooks() {
    try {
      const response = await databases.listDocuments(
        dataBaseId,
        booksCollectionId,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
      console.log(response.documents);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getBookById(bookId) {
    try {
      const response = await databases.getDocument(
        dataBaseId,
        booksCollectionId,
        bookId
      );
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        dataBaseId,
        booksCollectionId,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  async function deleteBookById() {
    try {
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${dataBaseId}.collections.${booksCollectionId}.documents`;

    if (user) {
      getBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;
        if (events[0].includes("create")) {
          setBooks((prev) => [...prev, payload]);
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);
  return (
    <BooksContext.Provider
      value={{ books, getBooks, getBookById, createBook, deleteBookById }}
    >
      {children}
    </BooksContext.Provider>
  );
}
