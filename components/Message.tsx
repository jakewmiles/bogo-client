import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  id: number;
  user: boolean;
  content: string;
  createdOn: string;
}

const Message = (props: Props) => {
  let user: ViewStyle = {
    alignSelf: 'flex-start',
    marginLeft: '2%',
  };
  if (props.user) {
    user = {
      alignSelf: 'flex-end',
    };
  }

  return (
    <View style={[styles.view, user]}>
      <Text style={styles.text}>{props.content}</Text>
      <Text style={styles.createdOn}>{props.createdOn}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'flex-start',
    width: '80%',
    paddingLeft: '2%',
    flex: 1,
  },
  text: {
    fontSize: 25,
  },
  createdOn: {
    alignSelf: 'flex-end',
    paddingRight: '5%',
    fontStyle: 'italic',
    color: '#333333',
  },
});

export default Message;