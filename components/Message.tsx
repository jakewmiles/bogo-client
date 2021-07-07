import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { userVar } from '../client'
import formatDate from '../services/function'


interface Props {
  id: number;
  user: boolean;
  content: string;
  createdOn: string;
}

const Message = (props: Props) => {
  const id = userVar().user.id
  let user: ViewStyle = {
    alignSelf: 'flex-start',
    marginLeft: '2%',
  };
  const time = formatDate(props.createdOn)

  if (parseInt(props.user) === parseInt(id)) {
    user = {
      alignSelf: 'flex-end',
    };
  }


  return (
    <View>
    <View style={[styles.view, user]}>
      <Text style={styles.text}>{props.content}</Text>
      <Text style={styles.createdOn}>{time}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    backgroundColor: 'rgba(153, 135, 157, 0.58)',
    borderRadius: 20,
    alignItems: 'flex-start',
    width: '70%',
    paddingLeft: '2%',
    flex: 1,
  },
  text: {
    color: 'white',
    fontFamily: 'PTSans_400Regular',
    padding:10,
    fontSize: 20,
  },
  createdOn: {
    fontSize:10,
    fontFamily: 'PTSans_400Regular',
    alignSelf: 'flex-end',
    paddingRight: '5%',
    padding:'2%',
    fontStyle: 'italic',
    color: 'rgba(51, 51, 51, 0.7)',
  },
});

export default Message;