import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { userVar } from '../client'


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
  function formatDate(unix) {
    unix = parseInt(unix)
    const now = new Date().toDateString().split(' ')
    const date = new Date(unix).toDateString().split(' ')
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  
    if(now[2] === date[2]) {
      const date = new Date(parseInt(unix));
      const hours = date.getHours();
      const minutes = "0" + date.getMinutes();
      const formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }
    if(parseInt(now[2])-1 === parseInt(date[2])) return 'Yesterday'
    if (parseInt(now[2])>= parseInt(date[2]) || parseInt(date[2]) < parseInt(now[2])-7 ) return days[new Date(unix).getDay()]
  
    return (new Date(unix).toLocaleDateString('en-UK'))
  }


  if (props.user == true) {
    user = {
      alignSelf: 'flex-end',
    };
  }


  return (
    <View>
    <View style={[styles.view, user]}>
      <Text style={styles.text}>{props.content}</Text>
      <Text style={styles.createdOn}>{formatDate(props.createdOn)}</Text>
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
    padding:10,
    fontSize: 20,
  },
  createdOn: {
    fontSize:10,
    alignSelf: 'flex-end',
    paddingRight: '5%',
    padding:'2%',
    fontStyle: 'italic',
    color: 'rgba(51, 51, 51, 0.7)',
  },
});

export default Message;