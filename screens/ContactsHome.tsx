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
  },
  {
    id: 5,
    first_name: 'Nick',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-U01RH16H9TP-f954b072e6f0-512'
  },
  {
    id: 6,
    first_name: 'Andre',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-URDG9J2FM-7f94083d412d-512'
  },
  {
    id: 7,
    first_name: 'Maylynn',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-U011YB5E6SJ-f4d8c729d184-512'
  },
  {
    id: 8,
    first_name: 'Andrew',
    profile_picture: 'https://ca.slack-edge.com/T0WU5R8NT-UREPE1AR2-d3cad052b4a2-512'
  },
]

const ConnectionsHome = (props: Props) => {
  const alternatingColor = ['#ffffff', '#f9f5ff'];
  const userInfo = props.route.params.userInfo;
  return (
    <View style={styles.view}>
      <Text style={styles.mainHeader}>Your Connections</Text>
      <FlatList
        data={Connections}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={{ backgroundColor: alternatingColor[index % alternatingColor.length]}}
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
    backgroundColor: '#f9f5ff',
    height: '100%',
    alignItems: 'center',
  },
  mainHeader: {
    backgroundColor: '#f9f5ff',
    paddingTop: 40,
    paddingBottom: 30,
    paddingHorizontal: 35,
    fontSize: 40,
  },
});

export default ConnectionsHome;