import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface DetailsScreenProps {
  
}
 
const DetailsScreen: React.FC<DetailsScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
   );
}
 
export default DetailsScreen;