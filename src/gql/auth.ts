import { gql } from "@apollo/client";

export const REGISTER = gql`
    mutation Register($email: String!, $password: String!, $phone: String!, $userName: String!, $firstName: String, $isEnabled: Boolean, $lastName: String, $role: Role) {
        register(email: $email, 
        password: $password, 
        phone: $phone, 
        userName: $userName, 
        firstName: $firstName, 
        isEnabled: $isEnabled, 
        lastName: $lastName, 
        role: $role) {
            _id
            email
            firstName
            isEnabled
            lastName
            phone
            role
            userName
        }
}
`

export const SIGNIN= gql`
        mutation SignIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            cart {
            _id
            products {
                item {
                    _id
                    currency
                    enabled
                    featuredImage
                    name
                    price
                    salePrice
                    stock
                }
                quantity
                }
            }
            token
            user {
                _id
                email
                firstName
                isEnabled
                lastName
                phone
                role
                userName
            }
            wishlist {
                _id
                products {
                    _id
                    currency
                    featuredImage
                    name
                    price
                    salePrice
                    stock
                }
            }
        }
    }
`