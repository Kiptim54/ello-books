import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useQuery, gql } from "@apollo/client";

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

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;