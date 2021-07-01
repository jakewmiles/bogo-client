import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import IconButton from '../../components/IconButton';
import TextButton from '../../components/TextButton';

export interface HobbiesScreenProps {
  navigation: any;
  route: any;
}

const Hobbies: Hobby[] = [
  {name: 'Football', id: 1, selected: false}, {name: 'Wine Tasting', id: 2, selected: false}, {name: 'Painting Figurines', id: 3, selected: false},
]

interface Hobby {
  name: string;
  id: number;
  selected: boolean;
}
 
const HobbiesScreen: React.FC<HobbiesScreenProps> = ({ navigation }) => {
  const [renderData, setRenderData] = useState(Hobbies)
  const onPressHandler = (id: number) => {
    let copyData = [...renderData]
    for (let data of copyData){
      if (data.id === id) {
        data.selected = !data.selected;
      }
    }
    setRenderData(copyData)
  }

  
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
      <Text style={styles.text}>What are your hobbies?</Text>
      <FlatList
        data={renderData}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onPressHandler(item.id)}>
            <TextButton title={item.name} filled={item.selected}/>
          </TouchableOpacity>
        )}
        extraData={renderData}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ImageUploadScreen')}
      >
      <IconButton 
          name={'chevron-right'}
          color={'white'}
          size={30}
          bgColor={'#99879D'}
          />
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
    width: '15%',
    height: '7%',
  },
})
 
export default HobbiesScreen;