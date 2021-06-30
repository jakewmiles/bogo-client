import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconButton from '../../components/IconButton';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import FloatingCard from '../../components/FloatingCard';
import TextButton from '../../components/TextButton';
import * as Location from 'expo-location';
import * as Permission from 'expo-permissions';
import { LocationObject } from 'expo-location';

export interface PersonalInfoScreenProps {
  navigation: any;
  route: any;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [region, setRegion] = useState<LocationObject>({coords: {latitude: 0, longitude: 0, altitude: null, accuracy: null, altitudeAccuracy: null, heading: null, speed: null }, timestamp: 0})
  const [marker, setMarker] = useState<LatLng>({latitude: 0, longitude: 0});
  const [location, setLocation] = useState('')
  let _mapView: MapView;
  
  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') console.log('Permission denied');
    let location = await Location.getCurrentPositionAsync({});
    setRegion(location)
  }

  const setLocationName = async (latitude: string, longitude: string) => {
    if (Number(latitude) > 0) {
      latitude = '+' + String(latitude);
    } else {
      latitude = String(latitude);
    };
    if (Number(longitude) > 0) {
      longitude = '+' + String(longitude)
    } else {
      longitude = String(longitude);
    };
    const response = await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&location=${encodeURIComponent(latitude)}${encodeURIComponent(longitude)}&radius=50&sort=-population`)
    const locations = await response.json();    
    const cities = locations.data.filter((location: any) => location.type === "CITY");
    if (!cities.length) setLocation('No major cities near you');
    else setLocation(`${cities[0].city}, ${cities[0].country}`);
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
      <FloatingCard cardWidth={'75%'}>
        <Text style={styles.text}>Where are you from?</Text>
        <MapView
          ref={(map: MapView) => { _mapView = map; }} 
          style={styles.map}
          initialRegion={{
            latitude: 51.5,
            longitude: 0.1,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
          onLongPress={async (e) => {
            setMarker(e.nativeEvent.coordinate)
            let latitude = String(e.nativeEvent.coordinate.latitude);
            let longitude = String(e.nativeEvent.coordinate.longitude);
            if (Number(latitude) > 0) latitude = '+' + latitude;
            if (Number(longitude) > 0) longitude = '+' + longitude;
            const response = await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&location=${encodeURIComponent(latitude)}${encodeURIComponent(longitude)}&radius=50&sort=-population`)
            const locations = await response.json();
            const cities = locations.data.filter((location: any) => location.type === "CITY");
            if (!cities.length) setLocation('No major cities near you');
            else setLocation(`${cities[0].city}, ${cities[0].country}`);
          }}
        >
          <Marker coordinate={marker}/>
        </MapView>
        <Text style={styles.text}>{location}</Text>
      </FloatingCard>
      <TouchableOpacity style={{height: '10%'}}
        onPress={() => {
          _mapView.animateToRegion({
            latitude: region.coords.latitude,
            longitude: region.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          })
          setMarker({latitude: region.coords.latitude, longitude: region.coords.longitude})
          setLocationName();
        }}>
        <TextButton title={'Get current location'}/>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => {
          if (!marker.longitude && !marker.latitude) alert('No location selected!')
          else if (location === 'No major cities near you') alert('No major cities near you!')
          else navigation.navigate('HobbiesScreen')}}
      >
        <IconButton name={'chevron-right'} color={'white'} size={30}/>
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