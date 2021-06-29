import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconButton from '../../components/IconButton';
// import MapView from 'react-native-maps';

export interface BirthDateScreenProps {
  navigation: any;
  route: any;
}

const BirthDateScreen: React.FC<BirthDateScreenProps> = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  
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
    marginVertical: 50,
  },
  datePicker: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#99879D',
    color: '#655669',
    paddingHorizontal: '15%',
    paddingVertical: 10,

  },
})

export default BirthDateScreen;