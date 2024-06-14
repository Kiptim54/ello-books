import React from "react";
// MUI
import { Box, Grid, Typography } from "@mui/material";
// UTILS
import { IBooks } from "../utils";
// Components
import BookCard from "./BookCard";

interface IReadingListProps {
  selectedBooks: IBooks[];
  removeBook: (currentBook: IBooks) => void;
}
export default function ReadingList(props: IReadingListProps) {
  const { selectedBooks, removeBook } = props;
  return (
    <Box my={8}>
      {selectedBooks.length > 0 ? (
        <Typography
          variant="h5"
          color="secondary.dark"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          Student Reading List
        </Typography>
      ) : (
        <Typography
          variant="h5"
          color="secondary.dark"
          fontWeight="bold"
          textAlign="center"
        >
          Hello! Select books from the search bar above to add to the reading
          list...
        </Typography>
      )}

      <Grid container spacing={4}>
        {selectedBooks.map((book: IBooks, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} alignSelf="stretch" key={index}>
              <BookCard currentBook={book} removeBook={removeBook} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
