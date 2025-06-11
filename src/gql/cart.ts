import { gql } from "@apollo/client";

export const UPDATE_CART = gql`
    mutation UpdateCart($id: ID!, $products: [CartProductInput!]) {
        updateCart(id: $id, products: $products) {
            _id
        }
    }
`

export const ADD_TO_CART = gql`
    mutation AddToCart($id: ID!, $item: String!, $quantity: Int) {
        addToCart(id: $id, item: $item, quantity: $quantity) {
            _id
            products {
            item {
                _id
                categories {
                _id
                description
                img
                name
                slug
                }
                createdAt
                currency
                description
                enabled
                featuredImage
                images
                name
                price
                rating
                salePrice
                stock
            }
            quantity
            }
        }
    }

`