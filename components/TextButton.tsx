import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface TextButtonProps {
  title: string,
}

const TextButton: React.FC<TextButtonProps> = ({title}) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}> {title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99879D',
    borderRadius: 50,
    height: '30%',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF', 
    textTransform: 'uppercase',
    fontSize: 20,
  }
})

export default TextButton;