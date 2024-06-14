import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GraphQL
import { useQuery } from "@apollo/client";
// MUI
import { Container } from "@mui/material";

// COMPONENTS
import Navbar from "./components/Navbar";
import BookSearchInput from "./components/BookSearchInput";
import ReadingList from "./components/ReadingList";
import Loader from "./components/Loader";
import ErrorLoading from "./components/ErrorLoading";

// UTILS
import { IBooks, GET_BOOKS } from "./utils";

// CUSTOM HOOK
import useLocalStorage from "./customHooks/useLocalStorage";

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  // const [selectedBooks, setSelectedBooks] = useState<IBooks[]>([]);
  const [selectedBooks, setSelectedBooks] = useLocalStorage<IBooks[]>(
    "selectedBooks",
    []
  );

  // add book from dropdown to list
  const addBookToReadingList = (currentBook: IBooks) => {
    const isDuplicate = selectedBooks.some(
      (book) =>
        book.title === currentBook.title && book.author === currentBook.author
    );
    if (!isDuplicate) {
      setSelectedBooks([...selectedBooks, currentBook]);
    } else {
      toast.info("You already have this book in the reading list");
    }
  };

  // remove book from list
  function removeBook(currentBook: IBooks): void {
    const { title, author } = currentBook;
    setSelectedBooks((prevBooks) => {
      const index = prevBooks.findIndex(
        (book) => book.title === title && book.author === author
      );

      if (index !== -1) {
        const updatedBooks = [...prevBooks];
        updatedBooks.splice(index, 1);
        toast.info(`Book titled "${title}" by "${author}" has been removed.`);
        return updatedBooks;
      } else {
        toast.error(`Book titled "${title}" by "${author}" not found.`);
        return prevBooks;
      }
    });
  }

  return error ? (
    <ErrorLoading />
  ) : loading ? (
    <Loader />
  ) : (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Container sx={{ p: 4 }}>
        <BookSearchInput books={data.books} addBook={addBookToReadingList} />
        <ReadingList selectedBooks={selectedBooks} removeBook={removeBook} />
      </Container>
    </div>
  );
}

export default App;
