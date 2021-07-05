import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile';
import { userVar } from '../client';

export interface ProfileScreenProps {

}

const userMock = {
  profilePicture: 'https://ca.slack-edge.com/T0WU5R8NT-U01RH16H9TP-f954b072e6f0-512',
  name: 'George',
  age: '28',
  city: 'Dartford',
  country: 'England',
  rating: 4.5,
  content: 'If falling asleep on trains after a great night out at a pub is your thing. I\'d be happy to introduce some local brews!',
  hangout1: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  hangout2: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
  interests: ['Music', 'Hiking', 'Films', 'Football', 'Cooking'],
  languages: [{ name: 'English', level: 'Fluent' }, { name: 'Chinese', level: 'Conversational' }],
  starRating: 3,
}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {

  const userInfo = userVar();

  console.log('userInfo', userInfo);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Profile user={userInfo.user} ownProfile={true} />
    </View>
  );
}

export default ProfileScreen;