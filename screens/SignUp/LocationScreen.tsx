import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface LocationScreenProps {
  
}
 
const LocationScreen: React.FC<LocationScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Location Screen</Text>
    </View>
   );
}
 
export default LocationScreen;