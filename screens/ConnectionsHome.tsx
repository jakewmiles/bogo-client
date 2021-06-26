import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Connection from '../components/Connection';

interface Props {
  navigation: any;
  route: any;
}

interface Connection {
  id: number,
  first_name: string,
  profile_picture: string,
}

const Connections: Connection[] = [
  {
    id: 1,
    first_name: 'Simon',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-U019WS814TH-a6cdb0dd1719-512'
  },
  {
    id: 2,
    first_name: 'Jake',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-U01MCQDHS7J-12d9bb0cbe6b-512'
  },
  {
    id: 3,
    first_name: 'George',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-U01QHV3DAEP-b68aa98023a8-512'
  },
  {
    id: 4,
    first_name: 'Mari',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-U01H36GTUMD-d4226efa2eed-512'
  }
]

const ConnectionsHome = (props: Props) => {
  const userInfo = props.route.params.userInfo;
  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Your Connections</Text>
      <FlatList
        data={Connections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('ConnectionsChat', {
                  id: item.id,
                  firstName: item.first_name,
                  profilePicture: item.profile_picture,
                });
              }}
            >
              <Connection
                id={item.id}
                firstName={item.first_name}
                profilePicture={item.profile_picture}
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
    backgroundColor: '#eaebed',
    height: '100%',
    alignItems: 'center',
  },
  mainHeader: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 60,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#222222',
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'white',
  },
});

export default ConnectionsHome;