import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconButton from '../../components/IconButton';
import MapView, { LatLng, Marker } from 'react-native-maps';

export interface BirthDateScreenProps {
  navigation: any;
  route: any;
}

const BirthDateScreen: React.FC<BirthDateScreenProps> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [marker, setMarker] = useState<LatLng>({latitude: 0, longitude: 0});
  const [location, setLocation] = useState('')
  
  const onChange = (event: Event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>What's your date of birth?</Text>
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
      <Text style={styles.text}>Where are you from?</Text>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 51.49492,
          longitude: -0.12766,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        onLongPress={async (e) => {
          setMarker(e.nativeEvent.coordinate)
          let latitude = String(e.nativeEvent.coordinate.latitude);
          let longitude = String(e.nativeEvent.coordinate.longitude);
          if (Number(latitude) > 0) latitude = '+' + latitude;
          if (Number(longitude) > 0) longitude = '+' + longitude;
          const response = await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&location=${encodeURIComponent(latitude)}${encodeURIComponent(longitude)}&radius=20&sort=-population`)
          const location = await response.json();
          if (!location.data.length) setLocation('No major cities near your location');
          else setLocation(`${location.data[0].city}, ${location.data[0].country}`);
        }}
      >
        <Marker coordinate={marker}/>
      </MapView>
      <Text>{location}</Text>
      
      <TouchableOpacity 
        onPress={() => navigation.navigate('LocationScreen')}
      >
        <IconButton 
          name={'chevron-right'}
          color={'white'}
          size={30}
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
  },
  datePicker: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#99879D',
    color: '#655669',
    paddingHorizontal: '15%',
    paddingVertical: 10,
  },
  map: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height - 400,
    marginBottom: 25,
    borderWidth: 1,
  }
})

export default BirthDateScreen;