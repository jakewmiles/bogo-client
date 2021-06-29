import React from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextStyle,
  ViewStyle
} from 'react-native';

export interface ArrowButtonProps {
  //onClick: () => void;
  title: string,
}

// export interface ArrowButtonStyles {
//   arrowButtonContainer: ViewStyle;
//   arrowButtonText: TextStyle;
// }

const ArrowButton: React.FC<ArrowButtonProps> = ({
  //onClick,
  title,
}) => {

  return (
    <button style={styles.arrowButtonContainer}>
      <Text style={styles.arrowButtonText}>{title}</Text>
    </button>
  )

}

const styles = StyleSheet.create({

  arrowButtonContainer: {
    backgroundColor: "#99879D",
    height: "200px",
    radius: "50%",
    width: "200px",
  },

  arrowButtonText: {
    fontSize: 18,
    color: "FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
  }

})

export default ArrowButton;