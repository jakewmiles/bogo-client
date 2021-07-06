import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList,TextInput, SafeAreaView } from 'react-native'
import { userVar } from '../client';
import ModalDropdown from 'react-native-modal-dropdown';
import FloatingCard from '../components/FloatingCard';
import ReviewCard from '../components/ReviewCard';


export interface BrowseReviewProps {

}
const rating = [1,2,3,4,5]

const data = [
  {
    id:'1',
    rating:5,
    content: 'Handy is faaaaantastic',
    profile: {
      id:'2',
      firstName:'Tandy',
      profileImg:'https://picsum.photos/200'
    }
 },{
  id:'2',
  rating:2,
  content: 'Handy is bad :(',
  profile: {
    id:'1',
    firstName:'Randy',
    profileImg:'https://picsum.photos/200'
  }
},{
  id:'3',
  rating:5,
  content: '🥨🥐🍞🥯',
  profile: {
    id:'2',
    firstName:'Mandy',
    profileImg:'https://picsum.photos/200'
  }
},{
  id:'4',
  rating:5,
  content: 'Handy is a good shag',
  profile: {
    id:'2',
    firstName:'Sandy',
    profileImg:'https://picsum.photos/200'
  }
}
]

const BrowseReview: React.FC<BrowseReviewProps> = ({navigation, route}) => {
  console.log(route)

  const userInfo = userVar();

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>{userInfo.user.firstName}'s Reviews</Text>
       <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()}
          }
        ><Text>Goback</Text></TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item}) => {
            return (
              <FloatingCard cardWidth={'100%'} >
                <ReviewCard prop={item}/>
              </FloatingCard>
            )
          }}
        />
        <TextInput
        placeholder="Write your review"
        />
        <ModalDropdown
        label='rating'
        options={rating}
        />
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: '70%',
    marginTop: 25,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
})

export default BrowseReview