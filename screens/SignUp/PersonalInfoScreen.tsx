import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconButton from '../../components/IconButton';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import FloatingCard from '../../components/FloatingCard';
import Map from '../../components/Map';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

export interface PersonalInfoScreenProps {
  navigation: any;
  route: any;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[styles.text, {fontSize: 30}]}>Nice to meet you, {route.params.firstName}!</Text>
      <FloatingCard cardWidth={'60%'}>
        <Text style={styles.text}>When's your birthday?</Text>
        <TouchableOpacity onPress={() => setShow(true)}>
          <Text style={styles.datePicker}>
            {('0' + date.getDate()).slice(-2)}/{('0' + (date.getMonth()+1)).slice(-2)}/{date.getFullYear()}
          </Text>
        </TouchableOpacity>
        {show && (<DateTimePicker
          value={date}
          mode={'date'}
          display='default'
          onChange={onChange}
        />)}
      </FloatingCard>
      <Map title={'Where are you from?'} currentLocation={true}/>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('HobbiesScreen')}}
      >
        <IconButton name={'chevron-right'} color={'white'} size={30} bgColor={'#99879D'}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  datePicker: {
    fontSize: 20,
    borderTopWidth: 1,
    borderColor: '#99879D',
    color: '#655669',
    paddingHorizontal: '15%',
    paddingVertical: 10,
  },
  map: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height - 400,
    borderWidth: 1,
  },
})

export default PersonalInfoScreen;