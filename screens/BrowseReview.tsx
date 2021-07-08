import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList,TextInput, SafeAreaView, KeyboardAvoidingView, Platform,Image, Keyboard } from 'react-native'
import { userVar } from '../client';
import { useQuery, useMutation } from '@apollo/client';
import ModalDropdown from 'react-native-modal-dropdown';
import FloatingCard from '../components/FloatingCard';
import {GET_REVIEWS} from '../services/queriesApi'
import {POST_REVIEWS} from '../services/mutationsApi'
import ReviewCard from '../components/ReviewCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export interface BrowseReviewProps {

}
const ratingDb = ['1','2','3','4','5']

const data = [
  {
    id:'1',
    rating:5,
    content: 'Handy is faaaaantastic',
    createdAt: '1625568131996',
    profile: {
      id:'2',
      firstName:'Tandy',
      profileImg:'https://picsum.photos/200',
    }
 },{
  id:'2',
  rating:2,
  content: 'Handy is bad :(',
  createdAt: '1625568231996',
  profile: {
    id:'1',
    firstName:'Randy',
    profileImg:'https://picsum.photos/200'
  }
},{
  id:'3',
  rating:5,
  content: '🥨🥐🍞🥯',
  createdAt: '1625068131996',
  profile: {
    id:'2',
    firstName:'Mandy',
    profileImg:'https://picsum.photos/200'
  }
},{
  id:'4',
  rating:5,
  content: 'Handy is a good shag',
  createdAt: '162568131996',
  profile: {
    id:'2',
    firstName:'Sandy',
    profileImg:'https://picsum.photos/200'
  }
}
]

const BrowseReview: React.FC<BrowseReviewProps> = ({navigation, route}) => {
  const userInfo = userVar();
  console.log(userInfo.user.id)
  const [reviewArr, setReviewArr] = useState([])
  const [rating, setRating] = useState('')
  const [review, setReview] = useState('')
  const {loading, error, data} = useQuery(GET_REVIEWS, {
    variables: {userId: {id:route.params.id}},
    pollInterval:500
  })
  const [postReview, postReviewCache] = useMutation(POST_REVIEWS, {
    variables: {review:{userId: route.params.id ,authorId:userInfo.user.id,content:review, rating: parseInt(rating)}}
  })

    
    
  if (error) console.log(error)
  if (loading) {
    return <View><Text>Loading</Text></View>}
  if (data.length > 0) setReviewArr(data)

  

  let reviews = (<FlatList
    data={data.reviews}
    keyExtractor={item => String(item.id)}
    renderItem={({ item}) => {
      return (
        <View style={styles.reviewView}>
          <FloatingCard cardWidth={'85%'} >
            <ReviewCard prop={item}/>
          </FloatingCard>
        </View>
      )
    }}
    />)
    if (data.reviews.length == 0) reviews = (<Text style={styles.text}>No reviews for this guide. Had a great experience with {route.params.firstName}? Leave a message below</Text>);
    

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={styles.header}>
         <Text style={styles.headerText}>{route.params.firstName}'s Reviews</Text>
         <Image
            style={styles.profilePicture}
            source={{
              uri: route.params.profileImg
            }}
          />
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.goBack()}
           >
           <MaterialCommunityIcons
           name={'arrow-left'}
           color={'rgba(153, 135, 157, 0.7)'}
           size={20}

          />
          <Text style={styles.navButtonText}> Back</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        {reviews}
        <View style={styles.input}>
        <TextInput
          placeholder="Write your review"
          style={styles.inputField}
          value={review}
          onChangeText={setReview}
        />
        <ModalDropdown
        label='rating'
        defaultValue={'Stars'}
        style={styles.inputFieldRating}
        options={ratingDb}
        scrollToIndex={true}
        onSelect={(value) =>setRating(ratingDb[value])}
        />
        <TouchableOpacity
            onPress={() => {
              if (!rating || !review ) alert('FAIL')
              postReview()
              setRating('')
              setReview('')
              Keyboard.dismiss()
            }}
            >
            <MaterialCommunityIcons
              name={'send'}
              color={'rgba(153, 135, 157, 0.7)'}
              size={25}
            />  
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText:{
    fontFamily: 'PTSans_700Bold',
    fontSize: 30,
  },
  reviewView: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize:20,    
    color:'#99879D',
    opacity:0.7
  },
  profilePicture: {
    height: 40,
    marginRight:'5%',
    width: 40,
    borderRadius: 35,
  },
  text: {
    height:'75%',
    alignSelf: 'center',
    justifyContent:'center',
    paddingTop:'50%',
    marginBottom: 70,
    marginHorizontal: 10,
    fontFamily: 'PTSans_400Regular',
    fontSize: 22,
    color: '#99879D',
  },
  navButton: {
    flexDirection: 'row',
    marginLeft:'-5%',
    marginRight:'5%',
    alignItems:'center',
    justifyContent:'center'
  },
  header: {
    paddingTop: '5%',
    marginTop: '10%',
    height: '10%',
    width:'100%',
    flexDirection: 'row-reverse', 
    alignItems:'center',
    justifyContent:'center'
  },
  input: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems:'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom:'13%'
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:20,
    backgroundColor: '#FAF9FE',
    width: '60%',
    alignSelf: 'center',
    textAlignVertical: 'top',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:'5%',
    fontSize: 15,
    marginLeft: '2%',
    marginRight: '3%',
  },
  inputFieldRating:{
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:20,
    backgroundColor: '#FAF9FE',
    width: '20%',
    alignSelf: 'center',
    textAlignVertical: 'top',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:'5%',
    fontSize: 15,
    marginLeft: '2%',
    marginRight: '3%',
  }
})

export default BrowseReview