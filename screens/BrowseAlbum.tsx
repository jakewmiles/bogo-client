import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumSqure from '../components/AlbumSquare';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';

interface Props {
  route: any
}

const BrowseAlbum = (props: Props) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
      <Text style={styles.heading}>{props.route.params.firstName}'s Hangouts</Text>
      <View style={styles.view}>
        <FlatList
          data={props.route.params.userAlbum}
          numColumns={3}
          keyExtractor={item => item.photoId}
          renderItem={({ item }) => <AlbumSqure imageUrl={item.imageUrl} />}
        />
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack()
        }}>
        <IconButton
          name={'arrow-left'}
          color={'white'}
          size={30}
          bgColor={'#99879D'}
        />
      </TouchableOpacity>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingVertical: '3%',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    width: '85%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  heading: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 40,
    paddingTop: 30,
    marginBottom: 50,
    textAlign: 'center',
    color: '#99879D',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 30,
  },
  backButtonText: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
  },
})

export default BrowseAlbum;