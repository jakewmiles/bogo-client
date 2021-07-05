import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Connection from '../components/Connection';
import { userVar } from '../client'

interface Props {
  navigation: any;
  route: any;
}



const ConnectionsHome = (props: Props) => {
  const alternatingColor = ['#ffffff', '#f9f5ff'];
  const userInfo = userVar();
  console.log(userInfo.user.chats, 'userinfo contacts')
  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Your Connections</Text>
      <FlatList
        data={userInfo.user.chats}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ backgroundColor: alternatingColor[index % alternatingColor.length]}}
              onPress={() => {
                props.navigation.navigate('ContactsChat', {
                  id: item.profile.id,
                  firstName: item.profile.firstName,
                  profilePicture: item.profile.profileImg,
                  chatId: item.id
                });
              }}
            >
              <Connection
                id={item.profile.id}
                firstName={item.profile.firstName}
                profilePicture={item.profile.profileImg}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f9f5ff',
    height: '100%',
    alignItems: 'center',
  },
  mainHeader: {
    fontFamily: 'PTSans_700Bold',
    backgroundColor: '#f9f5ff',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 35,
    fontSize: 40,
  },
});

export default ConnectionsHome;