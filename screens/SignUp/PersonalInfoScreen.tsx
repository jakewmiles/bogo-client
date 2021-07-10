import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { newUserVar } from '../../client';
import IconButton from '../../components/IconButton';
import Map from '../../components/Map';

export interface PersonalInfoScreenProps {
  navigation: any;
  route: any;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ navigation, route }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleLocation = (newCity: string, newCountry: string) => {
    setCity(newCity);
    setCountry(newCountry);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <Text style={styles.header}>Nice to meet you, {route.params.firstName}!</Text>
      
      <Map title={'Where are you from?'} currentLocation={true} onSelectLocation={handleLocation} />
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()}
          }
        >
          <IconButton name={'chevron-left'} color={'white'} size={30} bgColor={'#99879D'}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            newUserVar({...newUserVar(), city: city, country: country, filterCity: city});
            if(!city) alert('No location selected!')
            else navigation.navigate('LanguagesScreen')}}
        >
          <IconButton name={'chevron-right'} color={'white'} size={30} bgColor={'#99879D'}/>
        </TouchableOpacity>
      </View>
      <ProgressBar progress={0.17} color={'#99879D'} style={styles.progressBar}/>
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
  buttons: {
    width: '70%',
    marginTop: 25,
    flexDirection: 'row', 
    justifyContent: 'space-between'
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

export default PersonalInfoScreen;