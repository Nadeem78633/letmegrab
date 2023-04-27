import { useState } from "react";
import ProductEdit from "./ProductEdit";

import useBooksContext from "../hooks/use-books-context";

// Material ui
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ProductDetail from "./ProductDetail";

function ProductShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const [price, setPrice] = useState(book.price);
  const [description, setDescription] = useState(book.description);
  const [category, setCategory] = useState(book.category);
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
    alert(
      `DELETED PRODUCT ID IS : \n ${book.id} \nPRODUCT TITLE IS : \n ${book.title}`
    );
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let title = <h3>{book.title}</h3>;
  if (showEdit) {
    title = (
      <ProductEdit
        onSubmit={handleSubmit}
        book={book}
        price={price}
        description={description}
        category={category}
      />
    );
  }

  return (
    <>
      <TableRow key={book.id}>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>

        {!showEdit ? (
          <TableCell align="right">{book.price}</TableCell>
        ) : (
          <TableCell align="right">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={price}
              onChange={handleChange}
            />
          </TableCell>
        )}

        {!showEdit ? (
          <TableCell align="right">{book.description}</TableCell>
        ) : (
          <TableCell align="right">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={description}
              onChange={handleDescription}
            />
          </TableCell>
        )}
        {!showEdit ? (
          <TableCell align="right">{book.category}</TableCell>
        ) : (
          <TableCell align="right">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={category}
              onChange={handleCategory}
            />
          </TableCell>
        )}

        <TableCell align="right">
          <Stack direction="row" spacing={1}>
            <ProductDetail
              title={title}
              price={book.price}
              description={book.description}
              category={book.category}
            />
            <Button
              variant="contained"
              onClick={handleEditClick}
              style={{ backgroundColor: "green" }}
            >
              <EditIcon />
            </Button>
            <Button
              variant="contained"
              onClick={handleDeleteClick}
              style={{ backgroundColor: "red" }}
            >
              <DeleteOutlineIcon />
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ProductShow;
