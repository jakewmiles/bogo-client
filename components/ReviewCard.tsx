import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import StarRating from 'react-native-star-rating';
import formatDate from '../services/function';


const ReviewCard = ({prop}) => {
  const time = formatDate(prop.createdAt)


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
            style={styles.profilePicture}
            source={{
              uri: prop.profile.profileImg
            }}
          />
          <View style={styles.title}>
            <Text style={styles.headerText}>{prop.profile.firstName}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={prop.rating}
              starSize={20}
              fullStarColor={"#99879D"}
              halfStarColor={"#99879D"}
              emptyStarColor={"#99879D"}
              selectedStar={() => { return; }}
            />
        </View>
      </View>
      <Text style={styles.reviewText}>{prop.content}</Text>
      <Text style={styles.reviewTime}>{time}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  reviewText: {
    marginTop: '3%',
    fontFamily: 'PTSans_400Regular',
    fontSize: 20,
    color: 'black',
  },
  reviewTime: {
    alignSelf:'flex-end',
    marginTop: '1%',
    marginBottom: '-3%',
    fontFamily: 'PTSans_400Regular',
    fontSize: 10,
    color: 'rgba(51, 51, 51, 0.5)',
  },
  title: {
    flexDirection: 'column',
  },
  container: {
    width: 300,
    padding:'5%',
  },
  headerText: {
    marginTop: '3%',
    fontFamily: 'PTSans_700Bold',
    fontSize: 20,
    color: 'black',
  },
  header: {
    marginLeft:'-5%',
    flexDirection:'row'
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 35,
    marginRight:'5%'
  },
})

export default ReviewCard