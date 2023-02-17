import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`
export const ADD_USER = gql`
    mutation addUser($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($name: String!, $email: String!, $password: String!) {
        updateUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`

export const REMOVE_USER = gql`
    mutation removeUser($name: String!, $email: String!, $password: String!) {
        removeUser(name: $name, email: $email, password: $password) {
            token
            user {
                _id
                name
            }
        }
    }
`
