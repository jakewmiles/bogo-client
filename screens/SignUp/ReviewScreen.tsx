import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, Image, ScrollView } from 'react-native';
import { newUserVar, userVar } from '../../client';
import TextButton from '../../components/TextButton';
import { isLoggedInVar, SEND_USER } from '../../client';
import { ProgressBar } from 'react-native-paper';
import { useMutation } from '@apollo/client';
import FloatingCard from '../../components/FloatingCard';
import { Language } from './LanguagesScreen';
import { Hobby } from './HobbiesScreen';


export interface ReviewScreenProps {
  navigation: any;
  route: any;
}
 
const ReviewScreen: React.FC<ReviewScreenProps> = ({ navigation, route }) => {
const [ sendUser, sendUserCatch ] = useMutation(SEND_USER, {
  onError: (err) => console.log(err)
});

if (sendUserCatch.data) {
  console.log('SENDUSERCATCH',sendUserCatch.data);
  
  userVar(sendUserCatch.data);
  
  isLoggedInVar(true);
}

const mapIDs = (array: Hobby[]|Language[]) => {
  return array.map((object: Hobby|Language) => object.id);
}  

  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <FloatingCard cardWidth={'85%'}>
        <ScrollView style={{height: 600}}>
          <Text style={styles.header}>Review account details:</Text>
          <View style={{alignItems:'flex-start', width: '100%', padding: 25}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 35, marginBottom: 10}}>  
              <View>
                <Image style={styles.profPic} source={route.params.newUserObj.profileImg ? {uri: route.params.newUserObj.profileImg} : {uri:'placeholder'}}/>
              </View>
              <View style={{marginHorizontal: 15}}>
                <Text style={styles.labelText}>{route.params.newUserObj.firstName} {route.params.newUserObj.lastName}</Text>
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
                <Text style={styles.text}>{route.params.newUserObj.email}</Text>
                <Text style={styles.text}>{route.params.newUserObj.gender.charAt(0) +  route.params.newUserObj.gender.slice(1).toLowerCase()}</Text>
                <Text style={styles.text}>{('0' + route.params.newUserObj.dob.getDate()).slice(-2)}/{('0' + (route.params.newUserObj.dob.getMonth()+1)).slice(-2)}/{route.params.newUserObj.dob.getFullYear()}</Text>
                <Text style={styles.text}>{route.params.newUserObj.city}</Text>
                <Text style={styles.text}>{route.params.newUserObj.guide ? '✅' : "❌"}</Text>
                <Text style={styles.text}>{route.params.newUserObj.summary}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width: '40%'}}>
                <Text style={styles.labelText}>You speak: </Text>
              </View>
              <View>
                {route.params.newUserObj.languages.map((language: Hobby) => (
                  <Text style={styles.text} key={language.id}>•{language.name} </Text>
                ))}
              </View>
            </View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View style={{width: '40%'}}>
                <Text style={styles.labelText }>Your interests: </Text>
              </View>
              <View>
                {route.params.newUserObj.interests.map((interest: Hobby) => (
                  <Text style={styles.text} key={interest.id}>•{interest.name} </Text>
                )) }
              </View>
            </View>
          </View>
        </ScrollView>
      </FloatingCard>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {    
          newUserVar({...newUserVar(), languages: mapIDs(newUserVar().languages), interests: mapIDs(newUserVar().interests)})       
          console.log('FINALSTEPNEWUSER',newUserVar());
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