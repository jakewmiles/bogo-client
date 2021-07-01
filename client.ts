
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { makeVar } from '@apollo/client';
import gql from 'graphql-tag'


const link = new HttpLink({
  uri: 'http://localhost:3005'
});

export const isLoggedInVar = makeVar(false)





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
