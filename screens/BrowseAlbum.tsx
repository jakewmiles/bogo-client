import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AlbumSqure from '../components/AlbumSquare';
import FloatingCard from '../components/FloatingCard';
import IconButton from '../components/IconButton';

interface Props {
  route: any
}

const BrowseAlbum = (props: Props) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.viewContainer}>
      <Text style={styles.heading}>{props.route.params.firstName}'s Hangouts</Text>
      <FloatingCard cardWidth={'90%'}>
        <View style={styles.cardContainer}>
          <FlatList
            data={props.route.params.userAlbum}
            numColumns={3}
            keyExtractor={item => item.photoId}
            renderItem={({ item }) => <AlbumSqure imageUrl={item.imageUrl} />}
          />
        </View>
      </FloatingCard>
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
  cardContainer: {
    marginVertical: 20,
    flex: 1,
  },
  heading: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 40,
    paddingTop: 30,
    marginBottom: 35,
    textAlign: 'center',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 30,
  },
})

export default BrowseAlbum;