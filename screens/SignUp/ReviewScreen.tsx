import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import { newUserVar } from '../../client';
import TextButton from '../../components/TextButton';
import { ProgressBar } from 'react-native-paper';
import { useMutation } from '@apollo/client';
import { isLoggedInVar, SEND_USER } from '../../client';
import FloatingCard from '../../components/FloatingCard';
import { Language } from './LanguagesScreen';
import { Hobby } from './HobbiesScreen';


export interface ReviewScreenProps {
  navigation: any;
  route: any;
}
 
const ReviewScreen: React.FC<ReviewScreenProps> = ({ navigation }) => {
const [ sendUser, sendUserCatch ] = useMutation(SEND_USER, {
  onError: (err) => console.log(err)
});

if (sendUserCatch.data) {
  newUserVar(sendUserCatch.data);
  isLoggedInVar(true);
}

const mapIDs = (array: Hobby[]|Language[]) => {
  return array.map((object: Hobby|Language) => object.id);
}  

const newUser = newUserVar();

  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <FloatingCard cardWidth={'85%'}>
        <View style={{height: 600}}>
          <Text style={styles.header}>Review account details:</Text>
          <View style={{alignItems:'flex-start', width: '100%', padding: 25}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 35, marginBottom: 10}}>  
              <View>
                <Image style={styles.profPic} source={newUser.profileImg ? {uri: newUser.profileImg} : {uri:'placeholder'}}/>
              </View>
              <View style={{marginHorizontal: 15}}>
                <Text style={styles.labelText}>{newUser.firstName} {newUser.lastName}</Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{width: '40%'}}>
                <Text style={styles.labelText}>Email:</Text>
                <Text style={styles.labelText}>Gender:</Text>
                <Text style={styles.labelText}>Date of birth:</Text>
                <Text style={styles.labelText}>Your city:</Text>
                <Text style={styles.labelText}>Guide?:</Text>
                <Text style={styles.labelText}>Summary:</Text>
              </View>
              <View style={{width: '60%'}}>
                <Text style={styles.text}>{newUser.email}</Text>
                <Text style={styles.text}>{newUser.gender.charAt(0) +  newUser.gender.slice(1).toLowerCase()}</Text>
                <Text style={styles.text}>{('0' + newUser.dob.getDate()).slice(-2)}/{('0' + (newUser.dob.getMonth()+1)).slice(-2)}/{newUser.dob.getFullYear()}</Text>
                <Text style={styles.text}>{newUser.city}</Text>
                <Text style={styles.text}>{newUser.guide ? '✅' : "❌"}</Text>
                <Text style={styles.text}>{newUser.summary}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width: '40%'}}>
                <Text style={styles.labelText}>You speak: </Text>
              </View>
              <View>
                {newUser.languages.map((language: Hobby) => (
                  <Text style={styles.text} key={language.id}>•{language.name} </Text>
                ))}
              </View>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width: '40%'}}>
                <Text style={styles.labelText }>Your interests: </Text>
              </View>
              <View>
                {newUser.interests.map((interest: Hobby) => (
                  <Text style={styles.text} key={interest.id}>•{interest.name} </Text>
                )) }
              </View>
            </View>
          </View>
        </View>
      </FloatingCard>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {    
          newUserVar({...newUserVar(), languages: mapIDs(newUserVar().languages), interests: mapIDs(newUserVar().interests)})       
          console.log(newUserVar());
          sendUser({variables:{signupInput: newUserVar()}})
        }}>
        <TextButton title={'LAUNCH ACCOUNT'} filled={true}/>
      </TouchableOpacity>
      <ProgressBar progress={0.90} color={'#99879D'} style={styles.progressBar}/>
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
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  profPic: {
    width: 100, 
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#99879D',
  },
  button: {
    width: '70%',
    height: 55,
    marginTop: 25,
  },
  progressBar: {
    height: 7, 
    width: Dimensions.get('window').width, 
    marginTop: 50
  }
})
 
export default ReviewScreen;