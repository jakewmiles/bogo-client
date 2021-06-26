import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ProfileScreenProps {
  
}
 
const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
   );
}
 
export default ProfileScreen;