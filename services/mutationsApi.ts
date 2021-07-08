import gql from 'graphql-tag'

const USER_FIELDS = gql`
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

const USER = gql`
  mutation user($user: UserInput) {
    user(input: $user) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

const EXPERIENCES = gql`
  mutation experiences($experience: ExperienceInput) {
    experiences(input: $experience) {
      id
      userId
      title
      description
    }
  }
`

const USER_ALBUMS = gql`
  mutation userAlbums($photo: PhotoInput) {
    userAlbums(input: $photo) {
      userId
      imageUrl
    }
  }
`

const MESSAGES = gql`
  mutation userAlbums($messages: MessageInput) {
    userAlbums(input: $messages) {
      id
      chatId
      userId
      content
    }
  }
`

const FAVORITES = gql`
  mutation favorites($favorite: FavoriteInput) {
    userAlbums(input: $favorite) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`



export const POST_REVIEWS = gql`
  mutation ($review: ReviewInput!) {
	reviews (input: $review) {
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

