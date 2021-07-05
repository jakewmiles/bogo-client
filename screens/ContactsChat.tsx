import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from '../components/Message';

interface Props {
  navigation: any;
  route: any;
}

interface Message {
  id: number;
  user: boolean;
  createdOn: string;
  content: string;
}

const ContactsChat = ( props: Props ) => {
  const [messageContent, setMessageContent] = useState<string>('');
  const [messagesArray, setMessagesArray] = useState<any[]>([]);
  
  const chatId = props.route.params.chatId;
  console.log(props)


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => props.navigation.goBack()}
        >
        <MaterialCommunityIcons
        name={'arrow-left'}
        color={'rgba(153, 135, 157, 0.7)'}
        size={25}
        
      />
        <Text style={styles.goBackText}> Back</Text></TouchableOpacity>
        <Text style={styles.mainHeader}>{props.route.params.firstName}</Text>
        <Image
          style={styles.image}
          source={{
            uri: props.route.params.profilePicture,
          }}
        />
        <FlatList
          data={messagesArray}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return (
              <Message
              id={item.id}
              user={item.user}
              createdOn={item.createdOn}
              content={item.content}
              />
              );
            }}
            />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={messageContent}
            onChangeText={setMessageContent}
            multiline={true}
            numberOfLines={2}
            placeholder="Type message"
            />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log(messagesArray);
              setMessagesArray(prev => [...prev, messageContent]);
              setMessageContent('');
              console.log(messagesArray);
              
            }}
            >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  goBackText: {
    fontSize:25,    
    color:'#99879D',
    opacity:0.7
  },
  goBack: {
    paddingTop:'10%',
    justifyContent:'flex-start',
    flexDirection: 'row',
  },
  view: {
    backgroundColor: '#f9f5ff',
    height: '100%',
  },
  mainHeader: {
    fontSize: 60,
    alignSelf: 'center',
    // marginTop: '10%',
    marginLeft: '-30%',
  },
  headerContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: '8%',
  },
  image: {
    height: '10%',
    width: '17%',
    resizeMode: 'contain',
    borderRadius: 150,
    alignSelf: 'center',
    marginLeft: '60%',
    marginTop: '-16%',
    borderWidth: 1,
    borderColor: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    textAlignVertical: 'top',
    fontSize: 25,
    marginLeft: '2%',
    marginRight: '3%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  button: {
    width: 50,
    height: 70,
    alignSelf: 'center',
    textAlignVertical: 'top',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
  },
});

export default ContactsChat;