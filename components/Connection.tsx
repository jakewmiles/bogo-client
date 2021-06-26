import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  id: number;
  firstName: string;
  profilePicture: string;
}

const Match = (props: Props) => {
  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: props.profilePicture,
          }}
        />
      </View>
      <Text style={styles.text}>{props.firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    width: 350,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '80%',
    width: '80%',
    resizeMode: 'contain',
    borderRadius: 150,
  },
  imageView: {
    height: '80%',
    width: '40%',
  },
  text: {
    fontSize: 27,
  },
});

export default Match;
