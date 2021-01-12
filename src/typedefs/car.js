const { gql } = require('apollo-server');

const carDefs = gql`
  type Car {
    brand: String
    car: String
  }

  extend type Query {
    cars: [Car]
  }
`;

module.exports = { carDefs };
