import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextButton from '../../components/TextButton';

export interface LanguagesScreenProps {
  navigation: any;
  route: any;
}
 
const LanguagesScreen: React.FC<LanguagesScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>What languages do you speak?</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('LandingScreen')}
        >
          <TextButton title={'launch account'} filled={true}/>
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
    width: '70%',
    height: '7%',
  },
})
 
export default LanguagesScreen;