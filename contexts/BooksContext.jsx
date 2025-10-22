import { createContext, useState } from "react";


const dataBaseId = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const booksCollectionId = process.env.EXPO_PUBLIC_APPWRITE_BOOKS_COLLECTION_ID;

export const BooksContext = createContext();
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  async function getBooks() {
    try {
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

  async function createBook(book) {
    try {
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

  return (
    <BooksContext.Provider
      value={{ books, getBooks, getBookById, createBook, deleteBookById }}
    >
      {children}
    </BooksContext.Provider>
  );
}
