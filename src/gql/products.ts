import { gql } from "@apollo/client";

export const GET_PRODUCTS =  gql`
      query GetProducts($categories: [String!]) {
        getProducts(categories: $categories) {
          data {
            _id
            categories {
              _id
              description
              img
              name
              slug
            }
            currency
            description
            enabled
            rating
            featuredImage
            images
            name
            price
            salePrice
            stock
            createdAt
          }
          page
          pages
          total
        }
      }
`
export const GET_PRODUCT = gql`
  query Query($id: ID!) {
  getProductById(id: $id) {
    _id
    categories {
      _id
      description
      img
      name
      slug
    }
    currency
    description
    enabled
    rating
    featuredImage
    images
    name
    price
    salePrice
    stock
  }
}
`