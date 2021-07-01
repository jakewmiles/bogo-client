import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, FlatList } from 'react-native';
import IconButton from '../../components/IconButton';
import TextButton from '../../components/TextButton';
import * as ImagePicker from 'expo-image-picker';
import PhotoSquare from '../../components/PhotoSquare';

export interface ImageUploadScreenProps {
  navigation: any;
  route: any;
}
 
const ImageUploadScreen: React.FC<ImageUploadScreenProps> = ({ navigation }) => {

  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Upload images and videos of places you'd like to show us!</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center',  justifyContent: 'center'}}>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
          <PhotoSquare/>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SummaryScreen')}
        >
          <IconButton 
            name={'chevron-right'}
            color={'white'}
            size={30}
            bgColor={'#99879D'}

            />
        </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: '15%',
    height: '7%',
  },
  thumbnail: {
    width: 200,
    height: 200,
  },
  tagView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
  },
})
 
export default ImageUploadScreen;