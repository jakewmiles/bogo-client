import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconButton from '../../components/IconButton';

export interface ImageUploadScreenProps {
  navigation: any;
  route: any;
}
 
const ImageUploadScreen: React.FC<ImageUploadScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Upload images and videos of places you'd like to show us!</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SummaryScreen')}
        >
          <IconButton 
            name={'chevron-right'}
            color={'white'}
            size={30}
            bgColor={'#99879D'}

            />
        </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: '15%',
    height: '7%',
  },
})
 
export default ImageUploadScreen;