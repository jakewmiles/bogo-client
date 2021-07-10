import { useQuery } from '@apollo/client';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GET_MESSAGES } from '../client';
import formatDate from '../services/function';


interface Props {
  id: number;
  firstName: string;
  profilePicture: string;
  city: string;
  country: string;
  chatId: string;
}

const Connection = (props: Props) => {


  const {loading , error, data} = useQuery(GET_MESSAGES, {
    variables: {messageInput:{chatId: props.chatId}},
    pollInterval: 5000
  })
  let latestMessage = ''
  let time = ''
  if (loading) return <View><Text>Loading</Text></View>
  if (data) {
    latestMessage = data.messages[data.messages.length-1].content}
    time = formatDate(data.messages[data.messages.length-1].createdAt)
    
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
        <Text style={styles.extraTextDate}>{time}</Text>
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
