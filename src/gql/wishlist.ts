import { gql } from "@apollo/client";

export const ADD_TO_WISHLIST = gql`
    mutation AddToWishlist($id: ID!, $product: String!) {
        addToWishlist(id: $id, product: $product) {
            _id
            products {
            _id
            categories {
                name
            }
            currency
            featuredImage
            name
            price
            salePrice
            stock
            }
        }
    }
`