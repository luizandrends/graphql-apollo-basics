const { gql } = require('apollo-server');

const bookDefs = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    books: [Book]
    book: Book
  }
`;

module.exports = { bookDefs };
