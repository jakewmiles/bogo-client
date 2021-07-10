import React from 'react';
import { View } from 'react-native';
import { userVar } from '../client';
import Profile from '../components/Profile';

export interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {

  const userInfo = userVar();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Profile user={userInfo.user} ownProfile={true} />
    </View>
  );
}

export default ProfileScreen;