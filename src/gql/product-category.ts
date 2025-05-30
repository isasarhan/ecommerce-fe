import { gql } from "@apollo/client"

export const GET_PRODUCT_CATEGORIES = gql`
    query GetProductsCategories {
        getProductCategories {
            _id
            description
            img
            name
            slug
    }
}
`