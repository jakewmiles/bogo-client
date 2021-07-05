import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

interface Props {
  imageUrl: any
}

const AlbumSquare = (props: Props) => {

  return (
    <View style={styles.view}>
      <Image source={props.imageUrl} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    width: 200,
    height: 200,
    flex: 1,
    alignItems: 'center',
  },
})

export default AlbumSquare;