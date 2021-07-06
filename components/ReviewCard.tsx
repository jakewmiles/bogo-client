import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StarRating from 'react-native-star-rating';


const ReviewCard = ({prop}) => {
  console.log(prop)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
            style={styles.profilePicture}
            source={{
              uri: prop.profile.profileImg
            }}
          />
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
        <Text>{prop.profile.firstName}</Text>
      </View>
      <Text>{prop.content}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: 300,
    paddingTop:'5%',
  },
  header: {
    flexDirection:'row'
  },
  profilePicture: {
    height: 40,
    width: 40,
    borderRadius: 35,
  },
})

export default ReviewCard