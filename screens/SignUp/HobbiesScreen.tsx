import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface HobbiesScreenProps {
  
}
 
const HobbiesScreen: React.FC<HobbiesScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hobbies Screen</Text>
    </View>
   );
}
 
export default HobbiesScreen;