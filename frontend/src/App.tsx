import { useEffect, useState } from "react";
// import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import ElloLogo from "./assets/logoEllo.svg";

// GraphQL
import { useQuery, gql } from "@apollo/client";
// MUI

import {
  Autocomplete,
  Container,
  TextField,
  Box,
  Typography,
  Backdrop,
  Grid,
  CircularProgress,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

interface IBooks {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: number;
}

function App() {
  const GET_BOOKS = gql`
    query GetBooks {
      books {
        title
        author
        coverPhotoURL
        readingLevel
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [selectedBooks, setSelectedBooks] = useState<IBooks[]>([]);
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    if (data) {
      console.log(data.books);
    }
  }, [data]);

  return error ? (
    <p>error loading the books</p>
  ) : loading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mb: 4,
          px: 4,
        }}
      >
        <img src={ElloLogo} alt="Ello Logo" />

        <Typography color="secondary" fontWeight="bold">
          Discover Ello
        </Typography>
      </Box>
      <Container sx={{ p: 4 }}>
        <Autocomplete
          disablePortal
          id="ello-books-searchbar"
          options={data.books}
          // multiple
          // inputValue=""
          onChange={(event, value) => {
            event.preventDefault();
            console.log({ value });

            value && setSelectedBooks([...selectedBooks, value]);
          }}
          getOptionLabel={(option: IBooks) => option.title}
          sx={{ width: { md: "70%", xs: "90%" }, my: 6, margin: "auto" }}
          renderOption={(props, option, key) => {
            const image = require(`./${option.coverPhotoURL}`);
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
                    alignItems: "center",
                    justifyContent: "space-between",
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
                    {key.selected ? null : <AddCircleIcon color="warning" />}
                  </Box>
                </Box>
              </li>
            );
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Books For Students" />
          )}
        />
        <Box p={2} my={6}>
          <h2>Student Reading List</h2>
          <Grid container spacing={4}>
            {selectedBooks.map((book: IBooks) => {
              const image = require(`./${book.coverPhotoURL}`);
              return (
                <Grid item xs={12} sm={6} md={4} alignSelf="stretch">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 2,
                      borderRadius: 1,
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 200,
                        width: "100%",

                        borderRadius: 1,
                      }}
                    ></Box>
                    <Box p={2} sx={{ borderRadius: 2 }}>
                      <Typography paragraph mb={0}>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ color: "secondary.dark" }}
                        >
                          Title:
                        </Typography>{" "}
                        {book.title}
                      </Typography>
                      <Typography paragraph mb={0}>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ color: "secondary.dark" }}
                        >
                          Author:
                        </Typography>{" "}
                        {book.author}
                      </Typography>
                      <Typography paragraph mb={0}>
                        <Typography
                          variant="body1"
                          fontWeight="bold"
                          sx={{ color: "secondary.dark" }}
                        >
                          Level:
                        </Typography>{" "}
                        {book.readingLevel}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
