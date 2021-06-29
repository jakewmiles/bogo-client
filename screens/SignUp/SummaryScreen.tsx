import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface SummaryScreenProps {
  
}
 
const SummaryScreen: React.FC<SummaryScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Summary Screen</Text>
    </View>
   );
}
 
export default SummaryScreen;