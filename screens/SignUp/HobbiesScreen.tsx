import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import FloatingCard from '../../components/FloatingCard';
import IconButton from '../../components/IconButton';
import TextButton from '../../components/TextButton';
import ToggleableButtonFlatlist from '../../components/ToggleableButtonFlatlist';

export interface HobbiesScreenProps {
  navigation: any;
  route: any;
}

const Hobbies: Hobby[] = [
  {name: 'Football', id: '1', selected: false}, 
  {name: 'Wine Tasting', id: '2', selected: false}, 
  {name: 'Painting', id: '3', selected: false},
  {name: 'Shredding', id: '4', selected: false},
  {name: 'Working', id: '5', selected: false},
  {name: 'Memes', id: '6', selected: false},
  {name: 'Shrines', id: '7', selected: false},
  {name: 'Pentagrams', id: '8', selected: false},
  {name: 'Summoning', id: '9', selected: false},
  {name: 'Coding', id: '10', selected: false},
  {name: 'Eating', id: '11', selected: false},
]

interface Hobby {
  name: string;
  id: string;
  selected: boolean;
}
 
const HobbiesScreen: React.FC<HobbiesScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>What are your hobbies?</Text>
      <FloatingCard cardWidth={'85%'}>
        <ToggleableButtonFlatlist array={Hobbies}/>
      </FloatingCard>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ImageUploadScreen')}
      >
      <IconButton name={'chevron-right'} color={'white'} size={30} bgColor={'#99879D'}/>
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 50,
  },
  button: {
    marginVertical: 50,
    width: '15%',
    height: '7%',
  },
})
 
export default HobbiesScreen;