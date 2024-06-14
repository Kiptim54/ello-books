import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// UTILS
import { IBooks } from "../utils";

interface IBookCardProps {
  currentBook: IBooks;
  removeBook: (currentBook: IBooks) => void;
}
export default function BookCard(props: IBookCardProps) {
  const { currentBook, removeBook } = props;
  const image = require(`../${currentBook.coverPhotoURL}`);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={currentBook.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="semibold"
            color="secondary.dark"
          >
            {currentBook.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Author: {currentBook.author}
            <br /> Level: ({currentBook.readingLevel})
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="warning"
          sx={{ fontWeight: "bold", ml: "auto" }}
          onClick={() => removeBook(currentBook)}
        >
          <DeleteIcon sx={{ mr: 1 }} /> Remove Book
        </Button>
      </CardActions>
    </Card>
  );
}
