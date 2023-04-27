import { useEffect, useContext } from "react";

import ProductList from "./components/ProductList";
import BooksContext from "./context/books";


function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <ProductList />
      
    </>
  );
}

export default App;
