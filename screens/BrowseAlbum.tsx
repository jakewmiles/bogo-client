import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
  route: any
}

const BrowseAlbum = (props: Props) => {

  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
      <Text style={styles.heading}>{props.route.params.firstName}'s Hangouts</Text>
      <View>
        <FlatList
          data={props.route.params.userAlbum}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={(item: any) => <Image source={item.imageUrl} />}
        />
      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingVertical: '10%',
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  view: {
    height: 500,
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 22,
    color: '#99879D',
    paddingTop: 30,
    textAlign: 'center',
  },
  toggleView: {
    paddingTop: 10,
    height: 250,
  },
  hangoutButtonText: {
    fontFamily: 'PublicSans_500Medium',
    fontSize: 19,
    textAlign: 'center',
  },
  hangoutButton: {
    backgroundColor: '#99879D',
    borderRadius: 10,
    height: 50,
    width: 150,
    marginTop: 20,
    justifyContent: 'center',
  },
  favoritesButton: {
    marginVertical: 15,
  }
})

export default BrowseAlbum;