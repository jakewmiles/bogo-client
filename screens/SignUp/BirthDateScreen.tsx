import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconButton from '../../components/IconButton';
import MapView, { LatLng, Marker } from 'react-native-maps';
import FloatingCard from '../../components/FloatingCard';

export interface BirthDateScreenProps {
  navigation: any;
  route: any;
}

const BirthDateScreen: React.FC<BirthDateScreenProps> = ({ navigation, route }) => {
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
            const response = await fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&location=${encodeURIComponent(latitude)}${encodeURIComponent(longitude)}&radius=50&sort=-population`)
            const locations = await response.json();
            // console.log(locations.data);
            const cities = locations.data.filter((location: any) => location.type === "CITY");
            if (!cities.length) setLocation('No major cities near you');
            else setLocation(`${cities[0].city}, ${cities[0].country}`);
          }}
        >
          <Marker coordinate={marker}/>
        </MapView>
        <Text style={styles.text}>{location}</Text>
      </FloatingCard>
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

export default BirthDateScreen;