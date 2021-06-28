import gql from 'graphql-tag'

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