import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextButton from '../../components/TextButton';

export interface SignupScreenProps {
  navigation: any;
  route: any;
}
 
const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('BirthDateScreen')}
      >
        <TextButton 
          title={'Create Profile'}
          />
      </TouchableOpacity>
    </View>
    </View>
   );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: '8%',
  }
})
 
export default SignupScreen;