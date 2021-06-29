import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ImageUploadScreenProps {
  
}
 
const ImageUploadScreen: React.FC<ImageUploadScreenProps> = () => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ImageUpload Screen</Text>
    </View>
   );
}
 
export default ImageUploadScreen;