import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconButtonProps {
  name: string,
  color: string,
  size: number,
}

const IconButton: React.FC<IconButtonProps> = ({name, color, size}) => {
  return (
    <View style={styles.button}>
      <MaterialCommunityIcon
        name={name}
        color={color}
        size={size}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99879D',
    borderRadius: 30,
    height: 60,
    width: 60,
  },
  buttonText: {
    color: '#FFFFFF', 
    textTransform: 'uppercase',
    fontSize: 20,
  }
})

export default IconButton;