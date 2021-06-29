import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconButton from '../../components/IconButton';

export interface HobbiesScreenProps {
  navigation: any;
  route: any;
}
 
const HobbiesScreen: React.FC<HobbiesScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.text}>What are your hobbies?</Text>
    <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('ImageUploadScreen')}
    >
      <IconButton 
        name={'chevron-right'}
        color={'white'}
        size={30}
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
 
export default HobbiesScreen;