
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { makeVar, gql } from '@apollo/client';


const link = new HttpLink({
  uri: 'http://10.10.22.42:3005'
});

export const isLoggedInVar = makeVar(false)
export const userVar = makeVar([])


export const GET_USER = gql`
  query GetUser($loginInput: LoginInput!) {
    user(input: $loginInput) {
      id
      firstName
      lastName
    }

  }
`




const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  link,
  cache,
});

export default client
