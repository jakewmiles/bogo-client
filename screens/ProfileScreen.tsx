import React from 'react';
import { View } from 'react-native';
import Profile from '../components/Profile';
import { userVar } from '../client';

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