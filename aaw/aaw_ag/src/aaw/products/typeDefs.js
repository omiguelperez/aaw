export const productTypeDef = `
   
  type Product {
      id: Int!
      name: String!
      description: String!
      category:Category!
      unit_measurement: String!
      quantity: Int!
  }
  input ProductInput {
        name: String!
        description: String!
        category: Int! 
        unit_measurement: String!
        quantity: Int!
  }`;

export const productQueries = `
      allProduct: [Product]!
      productById(id: Int!): Product!
  `;

export const productMutations = `
    createProduct(Product: ProductInput!): Product!
    updateProduct(id: Int!, Product: ProductInput!): Product!
    deleteProduct(id: Int!): Int
`;