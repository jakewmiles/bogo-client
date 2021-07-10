import { useQuery } from '@apollo/client';
import * as WebBrowser from 'expo-web-browser';
import gql from 'graphql-tag';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import FloatingCard from '../components/FloatingCard';

export interface DisplayPlacesScreenProps {
  navigation: any;
  route: any;
}

const PLACES = gql`
  query places($coords: CoordsInput!){
    places(input: $coords){
      name
      rating
      user_ratings_total
      types
      icon
    }
  }
`

const DisplayPlacesScreen: React.FC<DisplayPlacesScreenProps> = ({ navigation, route }) => {
  const lat = route.params.lat;
  const lng = route.params.lng;

  const { loading, data, error } = useQuery(
    PLACES, 
    {variables: {coords: {
      lat: lat,
      lng: lng,
    }}
  })

  while (loading) {
    return <Text></Text>;
  }  

  let places;

  if (data) places = data.places.sort((a: any,b: any) => parseInt(b.user_ratings_total) - parseInt(a.user_ratings_total));

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[styles.header, {marginTop: 50}]}>Tap on a location to find out more!</Text>
      <FlatList 
        style={{marginTop: 10}}
        data={places}
        numColumns={1}
        nestedScrollEnabled
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(`https://www.google.com/search?q=${item.name}`)}>
          <FloatingCard cardWidth={'95%'}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Image source={{uri : item.icon}} style={{height: 30, width: 30, marginHorizontal: 25}}/>
                <View style={{height: 100, width: 275, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap'}}>
                  <View style={{width: 250}}>
                    <Text style={styles.header}>{item.name}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={item.rating}
                      starSize={20}
                      fullStarColor={"#99879D"}
                      halfStarColor={"#99879D"}
                      emptyStarColor={"#99879D"}
                      selectedStar={() => { return; }}
                    />
                    <Text> {item.rating}</Text>
                    <Text> ({item.user_ratings_total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} reviews)</Text>
                </View>
              </View>
            </View>
          </FloatingCard>
        </TouchableOpacity>
      )}
      extraData={places}
    />        
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 16, 
    marginVertical: 0,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})

export default DisplayPlacesScreen;