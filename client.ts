
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { makeVar, gql } from '@apollo/client';
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA65wsV-RQqDB0_iYWhvR26lW-WUjcDaGQ",
  authDomain: "bogo-client.firebaseapp.com",
  projectId: "bogo-client",
  storageBucket: "bogo-client.appspot.com",
  messagingSenderId: "980579043709",
  appId: "1:980579043709:web:19258e321397cd5ec52414",
  measurementId: "G-RHHGHHTB8E"
};
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();


const link = new HttpLink({
  uri: 'http://10.10.22.127:3005'
});


export const isLoggedInVar = makeVar(false);
export const userVar = makeVar<any>([]);
export const newUserVar = makeVar<any>([]);
export const filterInterestsVar = makeVar<any>([]);
export const filterFavoritesVar = makeVar<any>(false);
export const usersVar = makeVar<any>([]);


export const GET_MESSAGES = gql`
  query getMessages($messageInput: MessageInput!) {
    messages(input: $messageInput) {
      id
      content
      authorId
      createdAt
    }
  }
`
export const GET_USER = gql`
  query GetUser($loginInput: LoginInput!) {
    user(input: $loginInput) {
      id
      firstName
      lastName
      dob
      guide
      rating
      city
      country
      gender
      summary
      profileImg
      filterCity
      languages {
        id
        name
      }
      interests {
        id
        name
      }
      chats {
        id
        userId
        user1Id
        profile {
          id
          firstName
          lastName
          city
          country
          profileImg
        }
      }
      userAlbum {
        photoId
        imageUrl
      }
    }
  }
`

export const SEND_MESSAGES = gql`
  mutation sendMessage ($messageInput: MessageInput!){
  messages(input: $messageInput) {
    id
    authorId
    chatId
    content
  }
}
`
export const SEND_USER = gql`
  mutation SendUser($signupInput: UserInput!) {
    user(input: $signupInput) {
      id
      firstName
      lastName
      dob
      guide
      city
      country
      gender
      summary
      profileImg
      filterCity
      languages {
        id
        name
      }
      interests {
        id
        name
      }
      chats {
        id
        userId
        user1Id
        profile {
          id
          firstName
          lastName
          city
          country
          profileImg
        }
      }
      isFavorited
      userAlbum {
        photoId
        imageUrl
      }
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
