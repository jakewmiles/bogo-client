import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
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

interface Props {

}

//MOCKS

const mock = {
  profilePicture: 'https://ca.slack-edge.com/T0WU5R8NT-U01RH16H9TP-f954b072e6f0-512',
  name: 'George',
  age: '28',
  city: 'Dartford',
  country: 'England',
  rating: 4.5,
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

  // const [profileInfo, setProfileInfo] = useState<any>({});
  // const [isMatch, setIsMatch] = useState<string>('Here to be matched');

  // useEffect(() => {
  //   api.getProfileInfo(props.userId).then(newProfileInfo => {
  //     setProfileInfo(newProfileInfo);
  //     if (profileInfo.is_match === false) {
  //       setIsMatch('Here to make matches');
  //     }
  //   });
  // }, [props.userId, profileInfo.is_match]);

  // let editButton;
  // if (props.user) {
  //   editButton = (
  //     <View>
  //       <TouchableOpacity
  //         onPress={() => {
  //           return;
  //         }}
  //       >
  //         <Text style={styles.button}>Edit Profile</Text>
  //       </TouchableOpacity>
  //       <Text style={styles.subHeader}>UserID: {profileInfo.id}</Text>
  //     </View>
  //   );
  // }
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
          <View>
            <Text style={styles.name}>{mock.name}, {mock.age}</Text>
            <Text style={styles.location}>{mock.city}, {mock.country}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={4.5}
              selectedStar={(rating: Number) => onStarRatingPress(rating)}
            />
          </View>
        </View>
        {/* <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.mainHeader}>{profileInfo.first_name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: 'http://10.0.2.2:3001/' + profileInfo.profile_picture,
          }}
        />
        {editButton}
        <View style={styles.container}>
          <Text style={styles.subHeader}>{isMatch}</Text>
        </View>
        <Text style={styles.subHeader}>About me</Text>
        <View style={styles.container}>
          <Text style={styles.description}>{profileInfo.description}</Text>
        </View>
      </ScrollView> */}
      </View>
    );
  } else {
    return <Text>Hello</Text>;
  }
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    height: 550,
    width: '95%',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: 'rgba(0, 0, 0, .25)',
    shadowOpacity: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: 'green',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePicture: {
    height: 69,
    width: 69,
    borderRadius: 35,
  },
  name: {
    fontFamily: 'PTSans_700Bold',
    fontSize: 25,
  },
  location: {
    fontFamily: 'PTSans_400Regular',
    fontSize: 18,
  },
  // scroll: {
  //   width: '100%',
  //   height: 1000,
  //   alignItems: 'center',
  // },
  // mainHeader: {
  //   paddingTop: 30,
  //   paddingBottom: 10,
  //   fontSize: 60,
  //   fontFamily: 'MomcakeThin-9Y6aZ',
  //   marginBottom: 20,
  // },
  // subHeader: {
  //   fontSize: 30,
  //   alignSelf: 'center',
  //   marginTop: 20,
  // },
  // container: {
  //   marginVertical: 20,
  //   paddingBottom: 20,
  //   alignItems: 'center',
  //   width: '90%',
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  // },
  // button: {
  //   marginTop: 30,
  //   backgroundColor: '#222222',
  //   paddingHorizontal: 30,
  //   paddingVertical: 10,
  //   color: 'white',
  //   width: '100%',
  //   alignSelf: 'center',
  //   textAlign: 'center',
  // },
  // image: {
  //   height: '30%',
  //   width: '80%',
  //   resizeMode: 'contain',
  //   borderRadius: 150,
  // },
  // description: {
  //   fontSize: 25,
  //   alignSelf: 'flex-start',
  //   marginTop: 20,
  //   marginLeft: '5%',
  // },
});

export default Profile;
