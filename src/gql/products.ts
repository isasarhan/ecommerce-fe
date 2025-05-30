import { gql } from "@apollo/client";

export const GET_PRODUCTS =  gql`
      query GetProducts {
        getProducts {
            _id
            categories
            currency
            description
            enabled
            featuredImage
            images
            name
            price
            salePrice
            stock
        }
}
`