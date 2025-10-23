import { createContext, useEffect, useState } from "react";
import { databases } from "../lib/appwrite";
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

  async function getBookById(id) {
    try {
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
    if (user) {
      getBooks();
    } else {
      setBooks([]);
    }
  }, [user]);
  return (
    <BooksContext.Provider
      value={{ books, getBooks, getBookById, createBook, deleteBookById }}
    >
      {children}
    </BooksContext.Provider>
  );
}
