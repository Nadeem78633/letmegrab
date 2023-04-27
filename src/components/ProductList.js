import React, { useState } from "react";
import BookShow from "./ProductShow";
import useBooksContext from "../hooks/use-books-context";

// Material ui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ProductList() {
  const { books } = useBooksContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filterBooks = (query, category) => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.category.toLowerCase().includes(category.toLowerCase())
    );
  };

  const filteredBooks = filterBooks(searchQuery, selectedCategory);
  const renderedBooks = filteredBooks.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "200px",
            height: "30px",
            marginLeft: "95px",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ marginLeft: "30px", width: "200px", height: "30px" }}
        >
          <option value="">All categories</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Woman</option>
          <option value="men's clothing">Mens</option>
        </select>
      </div>

      <div className="book-list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Product Title</TableCell>
                <TableCell align="right">Product Price</TableCell>
                <TableCell align="right">Product Description</TableCell>
                <TableCell align="right">Product Category</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderedBooks}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ProductList;
