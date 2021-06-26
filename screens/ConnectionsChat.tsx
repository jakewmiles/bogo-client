import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Message from '../components/Message';

interface Props {
  navigation: any;
  route: any;
}

const MatchesChat = (props: Props) => {
  const [messageContent, setMessageContent] = useState<string>('');
  const [messagesArray, setMessagesArray] = useState<any[]>([]);

  return (
    <View style={styles.view}>
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
            setMessagesArray([...messagesArray, messageContent]);
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#eaebed',
    height: '100%',
  },
  mainHeader: {
    fontSize: 60,
    alignSelf: 'center',
    marginTop: '10%',
    marginLeft: '5%',
  },
  headerContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: '8%',
  },
  image: {
    height: '10%',
    width: '20%',
    resizeMode: 'contain',
    borderRadius: 150,
    alignSelf: 'center',
    marginLeft: '5%',
    marginTop: '10%',
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

export default MatchesChat;