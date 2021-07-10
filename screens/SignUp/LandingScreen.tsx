import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, requireNativeComponent } from 'react-native';
import TextButton from '../../components/TextButton';

export interface LandingScreenProps {
  route: any;
  navigation: any;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('../../assets/title-background.jpg')} style={{ justifyContent: 'center', opacity: 1, height: '100%', width: '100%', alignItems: 'center' }}>
        <Text style={styles.logo}>boGo</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignupScreen')}
        >
          <TextButton title={'CREATE ACCOUNT'} filled={true} />
        </TouchableOpacity>
        <View style={styles.login}>
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.loginButton}>
              Sign in now
            </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 120,
    marginVertical: '50%',
    opacity: 1,
    zIndex: 3,
    fontFamily: 'PTSans_400Regular'
  },
  button: {
    width: '70%',
    height: 55,
    opacity: 1,
    zIndex: 3,
    borderColor: 'black',
  },
  login: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    zIndex: 3
  },
  loginButton: {
    fontWeight: 'bold',
    opacity: 1,
    zIndex: 3,
    color: 'black',
    paddingBottom: 10,
  }
})

export default LandingScreen;