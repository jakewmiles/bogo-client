import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold,
  RedHatDisplay_700Bold,
  PublicSans_500Medium,
} from "@expo-google-fonts/dev";
import StarRating from 'react-native-star-rating';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconButton from './IconButton';

interface Props {

}

//MOCKS
const mock = {
  profilePicture: 'https://ca.slack-edge.com/T0WU5R8NT-U01RH16H9TP-f954b072e6f0-512',
  name: 'George',
  age: '26',
  city: 'Dartford',
  country: 'England',
  rating: 4.5,
  content: 'If falling asleep on trains after a great night out at a pub is your thing. I\'d be happy to introduce some local brews!',
  hangout1: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
  hangout2: 'https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc',
  interests: ['Music', 'Hiking', 'Films', 'Football', 'Cooking'],
  languages: [{ name: 'English', level: 'Fluent' }, { name: 'Chinese', level: 'Conversational' }],
  ownProfile: false,
}

let interestsString = '';
mock.interests.forEach(interest => {
  interestsString = interestsString + interest + ', ';
  return;
})
if (interestsString) {
  interestsString = interestsString.slice(0, -2);
}
let languagesString = '';
mock.languages.forEach(language => {
  languagesString = languagesString + language.level + ' ' + language.name + ', ';
})
if (languagesString) {
  languagesString = languagesString.slice(0, -2);
}

const Profile = (props: Props) => {

  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_700Bold,
    RedHatDisplay_700Bold,
    PublicSans_500Medium
  });

  function onStarRatingPress(rating: Number) {
    return;
  };

  let iconButtons = (<View style={styles.iconView}>
    <TouchableOpacity>
      <IconButton
        name={'star'}
        color={'white'}
        size={30} />
    </TouchableOpacity>
    <View style={styles.buttonDiv} />
    <TouchableOpacity>
      <IconButton
        name={'chat-processing-outline'}
        color={'white'}
        size={30} />
    </TouchableOpacity>
  </View>)

  let hangoutButtonText = 'View All';

  if (mock.ownProfile) {
    iconButtons = <View />;
    hangoutButtonText = 'Add +';
  }

  if (fontsLoaded) {
    return (
      <View style={styles.view}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: mock.profilePicture
            }}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.name}>{mock.name}, {mock.age}</Text>
            <Text style={styles.location}>{mock.city}, {mock.country}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={4.5}
              starSize={20}
              fullStarColor={"#99879D"}
              halfStarColor={"#99879D"}
              emptyStarColor={"#99879D"}
              selectedStar={(rating: Number) => onStarRatingPress(rating)}
            />
          </View>
          <MaterialCommunityIcons
            name="compass"
            color="black"
            size={27}
          />
        </View>
        <Text style={styles.content}>{mock.content}</Text>
        <View style={styles.hangoutHeader}>
          <Text style={styles.hangoutText}>Local hangout spots</Text>
          <TouchableOpacity style={styles.hangoutButton}>
            <Text style={styles.hangoutButtonText}>Add +</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hangoutImages}>
          <Image source={{ uri: mock.hangout1 }} style={styles.hangoutImage} />
          <Image source={{ uri: mock.hangout2 }} style={styles.hangoutImage} />
        </View>
        <Text style={styles.categoriesHeading}>Interests</Text>
        <Text style={styles.categories}>{interestsString}</Text>
        <Text style={styles.categoriesHeading}>Speaks</Text>
        <Text style={styles.categories}>{languagesString}</Text>
        {iconButtons}
      </View >
    );
  } else {
    return <Text></Text>;
  }
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    height: 590,
    width: '95%',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(0, 0, 0, .25)',
    shadowOpacity: 1,
    elevation: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profilePicture: {
    height: 69,
    width: 69,
    borderRadius: 35,
  },
  name: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 30,
  },
  location: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
    color: '#99879D',
  },
  headerInfo: {
    alignItems: "flex-start",
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 10,
    width: '60%',
    height: 85,
  },
  content: {
    height: 130,
    fontFamily: 'PTSans_400Regular',
    fontSize: 22,
    color: '#99879D',
  },
  hangoutHeader: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hangoutText: {
    fontFamily: 'RedHatDisplay_700Bold',
    fontSize: 21,
  },
  hangoutButtonText: {
    fontFamily: 'PublicSans_500Medium',
    fontSize: 19,
  },
  hangoutButton: {
    backgroundColor: '#99879D',
    borderRadius: 4,
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  hangoutImages: {
    marginVertical: 20,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hangoutImage: {
    height: 80,
    width: '47%',
    borderRadius: 6,
  },
  categoriesHeading: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 20,
    color: '#120E21',
  },
  categories: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
    color: '#99879D',
    marginBottom: 10,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonDiv: {
    height: 60,
    width: 20,
  }
});

export default Profile;
