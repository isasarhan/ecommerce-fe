import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers{
        getUsers {
            data {
                _id
                email
                featuredImage
                firstName
                isEnabled
                lastName
                phone
                role
                userName
            }
            page
            pages
            total
        }
    }
`

export const UPDATE_USER = gql `
    mutation UpdateUser($id: ID!, $email: String, $featuredImage: String, $firstName: String, $isEnabled: Boolean, $lastName: String, $password: String, $phone: String, $role: Role, $userName: String) {
        updateUser(id: $id, email: $email, featuredImage: $featuredImage, firstName: $firstName, isEnabled: $isEnabled, lastName: $lastName, password: $password, phone: $phone, role: $role, userName: $userName) {
            _id
        }
    }
`