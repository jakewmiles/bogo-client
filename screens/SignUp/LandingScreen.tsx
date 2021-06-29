import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import TextButton from '../../components/TextButton';

export interface LandingScreenProps {
  route: any;
  navigation: any;
}
 
const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('SignupScreen')}
      >
        <TextButton 
          title={'Create Account'}
          />
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: '8%',
  }
})
 
export default LandingScreen;