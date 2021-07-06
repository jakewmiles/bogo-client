interface User {
  id: string
  firstName: string
  lastName: string
  dob: string
  guide: Boolean
  city: string
  country: string
  gender: string
  summary: string
  profileImg: string
  filterCity: string
  userAlbum: Array<{ photoId: string, imageUrl: string}>
  languages: Array<{ id: string, name: string }>
  interests: Array<{ id: string, name: string }>
  isFavorited: Boolean
  userAlbum: Array<{ id: string, imageUrl: string }>
}

export default User