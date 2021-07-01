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




//fragments are useful when we use the same combinations of fields over and over (in queries, mutations, optimisticresponse)
// at the via interpolation as per the below
const PETS_FIELDS = gql`
  fragment PetsFields on Pet {
    id
    name
    type
    img
  }
`


// use the @client directive if this is a locally stored portion of the schema (check client.js for how to set that up)
const ALL_PETS = gql`
  query AllPets() {
    pets {
      id
      name
      type
      img
      age @client
    }
  }
`

const NEW_PET = gql`
  mutation newPet($newPet: NewPetInput!) {
    addPet(input: $newPet) {
      ... PetsFields
    }
  }
  ${PETS_FIELDS}
`