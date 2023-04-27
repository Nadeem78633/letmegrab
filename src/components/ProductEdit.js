import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

function ProductEdit({ book, onSubmit, price, description, category }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title, price, description, category);
    alert(
      `TITLE\n${title}\nPRICE\n${price}\nDESCRIPTION\n${description}\nCATEGORY\n${category}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <TextField className="input" value={title} onChange={handleChange} />
      <Button variant="contained" type="submit" style={{ marginTop: "17px" }}>
        Save
      </Button>
    </form>
  );
}

export default ProductEdit;
