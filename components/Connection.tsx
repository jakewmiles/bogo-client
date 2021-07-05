import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  id: number;
  firstName: string;
  profilePicture: string;
}

const Connection = (props: Props) => {
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
      <View style={styles.textView}>
        <Text style={styles.text}>{props.firstName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 10,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    borderRadius: 150,
    borderWidth: 1,
    borderColor:'white',
  },
  imageView: {
    height: '80%',
    width: '18%',
    marginRight: 50,
    marginLeft: 20
  },
  textView: {
    width: '60%',
  },
  text: {
    fontSize: 27,
    fontFamily: 'PTSans_700Bold',

  },
});

export default Connection;
