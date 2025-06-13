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

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: ID!, $categories: [ID!], $currency: Currency, $description: String, $enabled: Boolean, $featuredImage: String, $images: [String!], $name: String, $price: Float, $rating: Float, $salePrice: Float, $stock: Int) {
    updateProduct(id: $id, categories: $categories, currency: $currency, description: $description, enabled: $enabled, featuredImage: $featuredImage, images: $images, name: $name, price: $price, rating: $rating, salePrice: $salePrice, stock: $stock) {
      _id
    }
  }
`