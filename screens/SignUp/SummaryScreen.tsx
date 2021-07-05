import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Switch } from 'react-native';
import FloatingCard from '../../components/FloatingCard';
import { newUserVar } from '../../client';
import IconButton from '../../components/IconButton';
import { ProgressBar } from 'react-native-paper';


export interface SummaryScreenProps {
  navigation: any;
  route: any;
}
 
const SummaryScreen: React.FC<SummaryScreenProps> = ({ navigation }) => {
  const [text, setText] = useState<string>('');
  const [guideStatus, setGuideStatus] = useState<boolean>(false);
  const toggleSwitch = () => setGuideStatus(previousState => !previousState)


  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <FloatingCard cardWidth={'85%'}>
        <View style={{height: 125, flexDirection: 'row', justifyContent: 'center', width: '90%', alignItems: 'center'}}>
          <Switch
            trackColor={{ false: '#BBBBBB', true: '#9f7ca780'}}
            thumbColor={guideStatus ? '#9f7ca7' : '#FAFAFA'}
            ios_backgroundColor='#9f7ca7'
            onValueChange={toggleSwitch}
            value={guideStatus}
          />
          {/* <TouchableOpacity
            style={{height: 125, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => setGuideStatus(!guideStatus)}
          >
            {!guideStatus && <View style={{borderWidth: 1, borderRadius: 30, borderColor: '#99879D'}}>
              <IconButton name={'compass'} size={30} color={'#99879D'} bgColor={'white'}/>
            </View>}
            {guideStatus && <View style={{borderWidth: 1, borderRadius: 30, borderColor: 'white'}}>
              <IconButton name={'compass'} size={30} color={'white'} bgColor={'#99879D'}/>
            </View>}
          </TouchableOpacity> */}
          <View style={{width: '65%', marginHorizontal: 10}}>
            <Text style={styles.header}>Would you like to be a guide?</Text>
          </View>
        </View>
      </FloatingCard>
      <FloatingCard cardWidth={'85%'}>
        <View style={{height: 400, width: '100%', alignItems: 'center' }}>
          <Text style={styles.header}>Write a summary about yourself</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={6}
            defaultValue={text}
            onChangeText={text => setText(text)}
          />
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
            newUserVar({...newUserVar(), guide: guideStatus, summary: text});
            navigation.navigate('ReviewScreen', {newUserObj: newUserVar()});
        }}>
          <IconButton
            name={'chevron-right'}
            color={'white'}
            size={30}
            bgColor={'#99879D'}
            />
        </TouchableOpacity>
      </View>
      <ProgressBar progress={0.75} color={'#99879D'} style={styles.progressBar}/>
    </View>
   );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24, 
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttons: {
    width: '70%',
    marginTop: 25,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  textArea: {
    paddingHorizontal: 15,
    textAlignVertical: 'top',
    paddingVertical: 25,
    borderWidth: 1,
    borderColor: '#99879D',
    width: '90%',
    height: '60%',
    marginVertical: 25,
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})
 
export default SummaryScreen;