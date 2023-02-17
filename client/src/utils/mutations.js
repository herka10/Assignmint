import { gql } from '@apollo/client';

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

export const ADD_USER = gql`
    mutation addUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`
export const SIGNUP_USER = gql`
    mutation signUpUser($name: String!, $email: String!, $password: String!) {
        signUpUser(name: $name, email: $email, password: $password) {
            token
            user {
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

export const ADD_GROUP = gql`
    mutation addGroup($title: String!, name: String, users: String!) {
        addGroup(title: $title, name: $name, users: $users) {
            token
            group {
                _id
                name
            }
        }
    }
`

export const UPDATE_GROUP = gql`
    mutation updateGroup($title: String!, name: String, users: [ID]) {
        updateGroup(title: $title, name: $name, users: $users) {
            token
            group {
                _id
                name
            }
        }
    }
`

export const REMOVE_GROUP = gql`
    mutation removeGroup($title: String!, name: String, users: [ID]) {
        removeGroup(title: $title, name: $name, users: $users) {
            token
            group {
                _id
                name
            }
        }
    }
`

