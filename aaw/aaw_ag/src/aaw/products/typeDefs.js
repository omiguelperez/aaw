export const productTypeDef = `
  type Product {
      id: Int!
      name: String!
      description: String!
      category: Category!
      unit_measurement: String!
      quantity: Int!
  }
  input ProductInput {
      name: String!
      description: String!
      unit_measurement: String!
      quantity: Int!
      category: Int!
  }`;

export const productQueries = `
      allProducts: [Product]!
  `;

export const productMutations = `
`;
