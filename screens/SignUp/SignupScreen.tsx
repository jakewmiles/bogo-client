import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface SignupScreenProps {
  
}
 
const SignupScreen: React.FC<SignupScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
    </View>
   );
}
 
export default SignupScreen;