import React from 'react';
import { Image, StyleSheet, View } from 'react-native';



interface Props {
  imageUrl: any
}

const AlbumSquare = (props: Props) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: props.imageUrl }} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: 90,
    height: 90,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: '95%',
    borderRadius: 10,
  }
})

export default AlbumSquare;