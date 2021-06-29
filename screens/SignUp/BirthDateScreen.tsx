import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconButton from '../../components/IconButton';

export interface BirthDateScreenProps {
  navigation: any;
  route: any;
}

const BirthDateScreen: React.FC<BirthDateScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>When were you born?</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('LandingScreen')}
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
    width: '17%',
    height: '8%',
  },
})

export default BirthDateScreen;