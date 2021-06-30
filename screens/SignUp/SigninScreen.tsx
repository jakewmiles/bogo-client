import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextButton from '../../components/TextButton';

export interface SigninScreenProps {
  navigation: any;
  route: any;
}
 
const SigninScreen: React.FC<SigninScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('LandingScreen')}
      >
        <TextButton title={'Sign in'}/>
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: '7%',
  }
})
 
export default SigninScreen;