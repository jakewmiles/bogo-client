import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CicularButton from '../../ui-components/CircularButton';



const BirthDateScreen = () => {

  return (
    <View>
      <Text style={styles.text}>When were you born?</Text>
      <ArrowButton title='>' />
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