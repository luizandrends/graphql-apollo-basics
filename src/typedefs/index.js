const { gql } = require('apollo-server');

const { bookDefs } = require('./book');
const { carDefs } = require('./car');

const typeDefs = gql`
  type Query {
    _: String
  }
`;

module.exports = [typeDefs, bookDefs, carDefs];
