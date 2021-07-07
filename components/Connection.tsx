import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useQuery } from '@apollo/client'
import { GET_MESSAGES } from '../client'
import { formatDate } from '../function'


interface Props {
  id: number;
  firstName: string;
  profilePicture: string;
  city: string;
  country: string;
  chatId: string;
}

const Connection = (props: Props) => {
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


  const {loading , error, data} = useQuery(GET_MESSAGES, {
    variables: {messageInput:{chatId: props.chatId}},
    pollInterval: 5000
  })
  let latestMessage = ''
  let formattedDate = ''
  if (loading) return <View><Text>Loading</Text></View>
  console.log(data.messages[data.messages.length-1])
  if (data) {
    latestMessage = data.messages[data.messages.length-1].content}
    formattedDate = formatDate(data.messages[data.messages.length-1].createdAt)
    
  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: props.profilePicture,
          }}
        />

      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.firstName}</Text>
        <Text style={styles.extraTextDate}>{formattedDate}</Text>
        <Text style={styles.extraTextLocation}>{props.city}, {props.country}</Text>
        <Text style={styles.extraText}>{latestMessage}</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  extraTextLocation: {
    color:'grey',
    fontStyle:'italic',
    fontWeight:'bold'
  },
  extraText: {
    color:'grey',
  },
  extraTextDate: {
    color:'grey',
    alignSelf:'flex-end',
    marginTop:-15
  },
  view: {
    marginVertical: 10,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 150,
    borderWidth: 1,
    borderColor:'white',
  },
  imageView: {
    height: '80%',
    width: '18%',
    marginRight: 50,
    marginLeft: 20
  },
  textView: {
    width: '60%',
  },
  text: {
    fontSize: 27,
    fontFamily: 'PTSans_700Bold',

  },
});

export default Connection;
