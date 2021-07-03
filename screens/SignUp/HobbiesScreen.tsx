import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { newUserVar } from '../../client';
import FloatingCard from '../../components/FloatingCard';
import IconButton from '../../components/IconButton';
import TextButton from '../../components/TextButton';
import ToggleableButtonFlatlist from '../../components/ToggleableButtonFlatlist';
import { INTERESTS } from '../../services/queriesApi';
import { useQuery } from '@apollo/client';
import { ProgressBar } from 'react-native-paper';

export interface HobbiesScreenProps {
  navigation: any;
  route: any;
}

export interface Hobby {
  name: string;
  id: string;
  selected: boolean;
}
 
const HobbiesScreen: React.FC<HobbiesScreenProps> = ({ navigation }) => {
  const { loading, error, data } = useQuery(INTERESTS);
  while(loading) {
    return null;
  }
  const dataArray = data.interests;  
  const languagesArray = dataArray.map((interest: Hobby) => interest.selected = false);

  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <FloatingCard cardWidth={'85%'}>
      <Text style={styles.header}>What are your interests?</Text>
        <View style={{height: 400, justifyContent: 'center', alignItems: 'center'}}>
          <ToggleableButtonFlatlist array={dataArray}/>
        </View>
      </FloatingCard>
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
            // const selectedHobbyIDs = dataArray.filter((hobby: Hobby) => hobby.selected === true)
            //                                 .map((hobby: Hobby) => hobby.id);
            newUserVar({...newUserVar(), interests: dataArray.filter((hobby: Hobby) => hobby.selected === true)});
            navigation.navigate('ImageUploadScreen');
          }}
        >
        <IconButton name={'chevron-right'} color={'white'} size={30} bgColor={'#99879D'}/>
        </TouchableOpacity>
      </View>
      <ProgressBar progress={0.46} color={'#99879D'} style={styles.progressBar}/>
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
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 50,
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})
 
export default HobbiesScreen;