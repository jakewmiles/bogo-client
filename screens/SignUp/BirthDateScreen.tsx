import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CircularButton from '../../components/CircularButton';



const BirthDateScreen = () => {

  return (
    <View>
      <Text style={styles.text}>When were you born?</Text>
      <CircularButton title='>' />
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 15,
    fontWeight: "bold",
  },

})

export default BirthDateScreen;