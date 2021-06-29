import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface LanguagesScreenProps {
  
}
 
const LanguagesScreen: React.FC<LanguagesScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Languages Screen</Text>
    </View>
   );
}
 
export default LanguagesScreen;