const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const bookResolvers = {
  books: () => books,
  book: () => books[0],
};

module.exports = { bookResolvers };
