const { bookResolvers } = require('./books.resolver');
const { carResolvers } = require('./cars.resolver');

const resolvers = {
  Query: {
    books: bookResolvers.books,
    book: bookResolvers.book,
    cars: carResolvers.cars,
  },
};

module.exports = { resolvers };
