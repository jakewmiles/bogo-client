import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import TextButton from '../components/TextButton';
import Map from '../components/Map';
import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag'

export interface SearchPlacesScreenProps {
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
    }
  }
`

const SearchPlacesScreen: React.FC<SearchPlacesScreenProps> = ({ navigation, route }) => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleLocation = (newCity: string, newCountry: string, selectedLat: string, selectedLng: string) => {
    if (selectedLat.charAt(0) === '+') {
      selectedLat = selectedLat.slice(1)
    }
    if (selectedLng.charAt(0) === '+') {
      selectedLng = selectedLng.slice(1)
    }
    setLat(selectedLat);
    setLng(selectedLng);    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 25 }}>   
      <View style={{ marginBottom: 20, paddingHorizontal: 35 }}>
        <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>Discover points of interest: place a marker on the map!</Text>  
      </View>   
      <Map title={'Where are you visiting?'} currentLocation={true} onSelectLocation={handleLocation} />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {    
          navigation.navigate('DisplayPlacesScreen', {lat: lat, lng: lng})
        }}>
        <TextButton title={'SHOW PLACES NEARBY'} filled={true}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32, 
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: '70%',
    height: 55,
    marginTop: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  map: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height - 400,
    borderWidth: 1,
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})

export default SearchPlacesScreen;