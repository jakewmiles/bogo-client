import gql from 'graphql-tag'

export const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    firstName
    lastName
    age
    guide
    location
    gender
    summary
    profileImg
    headerImg
  }
`

export const USER = gql`
  query user($user: LoginInput) {
    user(input: $user) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

export const USERS = gql`
  query users($users: UsersInput) {
    users(input: $users) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

export const LANGUAGES = gql`
  query languages {
    languages{
      id
      name
    }
  }
`

export const INTERESTS = gql`
  query interests {
    interests{
      id
      name
    }
  }
`

export const FAVORITES = gql`
  query favorites($user: UserInput) {
    favorites(input: $user) {
      id
      favoriteId
      user1Id
    }
  }
`

export const EXPERIENCES = gql`
  query experiences($user: UserInput) {
    experiences(input: $user) {
      id
      userId
      title
      description
    }
  }
`

export const USER_ALBUMS = gql`
  query userAlbums($user: UserInput) {
    userAlbums(input: $user) {
      userId
      imageUrl
    }
  }
`

export const MESSAGES = gql`
  query userAlbums($messages: MessageInput) {
    userAlbums(input: $messages) {
      id
      chatId
      userId
      content
    }
  }
`
export const GET_REVIEWS = gql`
  query ($userId: UserInput!) {
	reviews (input: $userId) {
    id
    createdAt
    content
    rating
    profile {
      id
      firstName
      profileImg
    }
  }
}
`

