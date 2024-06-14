import React, { Dispatch, SetStateAction } from "react";
// MUI
import { Autocomplete, Box, TextField } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// UTILS
import { IBooks } from "../utils";

interface IBookSearchIputProps {
  books: IBooks[];
  addBook: (currentBook: IBooks) => void;
}
export default function BookSearchInput(props: IBookSearchIputProps) {
  const { books, addBook } = props;
  return (
    <Autocomplete
      disablePortal
      id="ello-books-searchbar"
      options={books}
      onChange={(event, value) => {
        value && addBook(value);
      }}
      getOptionLabel={(option: IBooks) => option.title}
      sx={{ width: { md: "70%", xs: "90%" }, my: 6, margin: "auto" }}
      renderOption={(props, option, key) => {
        const image = require(`../${option.coverPhotoURL}`);
        return (
          <li {...props} key={key.index}>
            <Box
              sx={{
                background: "warning",
                display: "flex",
                flexWrap: {
                  xs: "wrap",
                  lg: "nowrap",
                },
                flexDirection: {
                  xs: "column",
                  lg: "row",
                },

                alignItems: { lg: "center", xs: "flex-start" },
                justifyContent: { lg: "space-between", xs: "flex-end" },
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 50,
                    width: 50,
                    mr: 2,
                    borderRadius: 1,
                  }}
                ></Box>
                <span>
                  <b>{option.title}</b>
                </span>
              </Box>
              <Box>
                <AddCircleIcon color="warning" />
              </Box>
            </Box>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} label="Select Books For Students" />
      )}
    />
  );
}
