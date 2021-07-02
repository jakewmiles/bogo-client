import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Map from '../components/Map';
import { gql, useMutation } from '@apollo/client';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: any;
  route: any;
}

type FilterCity = {
  id: String
  email: String
  filterCity: String
}

const UPDATE_LOCATION_FILTER = gql`
  mutation UpdateLocationFilter($filterCity: FilterCity!) {
    user(input: $filterCity) {
      id
      firstName
      lastName
      dob
      guide
      city
      country
      gender
      summary
      profileImg
      filterCity
      languages
      interests
      favorites
    }
  }
`;

const BrowseFilter = (props: Props) => {

  const [updateLocationFilter, { data }] = useMutation(UPDATE_LOCATION_FILTER)

  function onSelectLocation(city: String) {
    updateLocationFilter({ variables: { filterCity: { id: '55', email: 'hello@gmail.com', filterCity: city } } })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Filter our guides by location or </Text>
      <Map title={'Where are you visiting?'} currentLocation={false} onSelectLocation={onSelectLocation} />
    </View >
  );
}

const styles = StyleSheet.create({
  pagination: {
    width: 10,
  },
  paginationView: {
    flexDirection: 'row',
    width: '100%',
    height: '8%',
    justifyContent: 'space-around',
  }
})

export default BrowseFilter;