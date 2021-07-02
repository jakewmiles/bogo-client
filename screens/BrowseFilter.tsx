import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Map from '../components/Map';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: any;
  route: any;
}

const BrowseFilter = (props: Props) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Filter our guides by location or </Text>
      <Map title={'Where are you visiting?'} currentLocation={false} />
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