import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from '../components/Profile';

export interface ProfileScreenProps {

}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Profile />
    </View>
  );
}

export default ProfileScreen;