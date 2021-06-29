import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface LandingScreenProps {
  
}
 
const LandingScreen: React.FC<LandingScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Landing Screen</Text>
    </View>
   );
}
 
export default LandingScreen;