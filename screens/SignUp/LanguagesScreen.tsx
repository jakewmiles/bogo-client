import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextButton from '../../components/TextButton';
import ToggleableButtonFlatlist from '../../components/ToggleableButtonFlatlist';
import FloatingCard from '../../components/FloatingCard';
import { userVar } from '../../App';

export interface LanguagesScreenProps {
  navigation: any;
  route: any;
}

interface Language {
  name: string;
  id: string;
  selected: boolean;
}

const Languages: Language[] = [
  { name: 'English', id: '1', selected: false },
  { name: 'Somali', id: '2', selected: false },
  { name: 'Basque', id: '3', selected: false },
  { name: 'Uzbek', id: '4', selected: false },
  { name: 'Klingon', id: '5', selected: false },
  { name: 'Esperanto', id: '6', selected: false },
  { name: 'Toki Pona', id: '7', selected: false },
  { name: 'Deccan', id: '8', selected: false },
  { name: 'Zulu', id: '9', selected: false },
  { name: 'Kazakh', id: '10', selected: false },
  { name: 'Yiddish', id: '11', selected: false },
  { name: 'Kazakh', id: '12', selected: false },

] 
 
const LanguagesScreen: React.FC<LanguagesScreenProps> = ({ navigation }) => {
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>What languages do you speak?</Text>
      <FloatingCard cardWidth={'85%'}>
        <View style={{height: 500, justifyContent: 'center', alignItems: 'center', paddingVertical: 100 }}>
          <ToggleableButtonFlatlist array={Languages}/>
        </View>
      </FloatingCard>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          const selectedLanguageIDs = Languages.filter((language) => language.selected === true)
                                               .map((language) => language.id);          
          userVar({...userVar(), languages: selectedLanguageIDs});
          console.log(userVar());          
          navigation.navigate('LandingScreen');
        }}>
        <TextButton title={'LAUNCH ACCOUNT'} filled={true}/>
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: '70%',
    height: '7%',
  },
})
 
export default LanguagesScreen;