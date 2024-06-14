import { gql } from "@apollo/client";

export interface IBooks {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: number;
}

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;
