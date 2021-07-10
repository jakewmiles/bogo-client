import { useQuery } from '@apollo/client';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { newUserVar } from '../../client';
import FloatingCard from '../../components/FloatingCard';
import IconButton from '../../components/IconButton';
import ToggleableButtonFlatlist from '../../components/ToggleableButtonFlatlist';
import { LANGUAGES } from '../../services/queriesApi';

export interface LanguagesScreenProps {
  navigation: any;
  route: any;
}

export interface Language {
  name: string;
  id: string;
  selected: boolean;
}

const LanguagesScreen: React.FC<LanguagesScreenProps> = ({ navigation }) => {
  const { loading, error, data } = useQuery(LANGUAGES);
  while(loading) {
    return null;
  }

  const dataArray = data.languages;  
  
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <FloatingCard cardWidth={'85%'}>
      <Text style={styles.header}>What languages do you speak?</Text>
      <View style={{height: 400, justifyContent: 'center', alignItems: 'center' }}>
        <ToggleableButtonFlatlist array={dataArray}/>
      </View>
      </FloatingCard>
      <View style={styles.buttons}>
        <TouchableOpacity
            onPress={() => {
              navigation.goBack()}
            }>
            <IconButton name={'chevron-left'} color={'white'} size={30} bgColor={'#99879D'}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            newUserVar({...newUserVar(), languages: dataArray.filter((language: Language) => language.selected === true)});
            navigation.navigate('HobbiesScreen');
          }}>
          <IconButton
            name={'chevron-right'}
            color={'white'}
            size={30}
            bgColor={'#99879D'}
          />
        </TouchableOpacity>
      </View>
      <ProgressBar progress={0.31} color={'#99879D'} style={styles.progressBar}/>
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
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buttons: {
    width: '70%',
    marginTop: 25,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})
 
export default LanguagesScreen;