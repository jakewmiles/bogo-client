import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import IconButton from '../../components/IconButton';
import * as ImagePicker from 'expo-image-picker';
import PhotoSquare from '../../components/PhotoSquare';
import { newUserVar } from '../../client';
import { storage } from '../../client';
import { ProgressBar } from 'react-native-paper';

export interface ImageUploadScreenProps {
  navigation: any;
  route: any;
}

const ImageUploadScreen: React.FC<ImageUploadScreenProps> = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState<string|undefined>(undefined);
  const [images, setImages] = useState<string[]>([])

  const handleUpload = (image: string) => {
    setImages([...images, image]);   
  }

  const handleDelete = (imageToDelete: string) => {
    setImages(images.filter((image) => image !== imageToDelete));    
  }

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    })
    if (!result.cancelled) {     
      setProfileImage(result.uri);
    }
  };

  const getImageName = (uri: string|undefined) => {
    if (uri) {
      const uriSplit = uri.split('/');
      return uriSplit[uriSplit.length-1]
    }
  }

  const firebaseUpload = async (uri: string|undefined, imageName: string|undefined) => {
    if (uri) {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const ref = storage.ref().child(`images/${imageName}`);
      return ref.put(blob);
    }
  }

  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={takeImage}>
        {!profileImage && <IconButton name={'camera'} color={'white'} bgColor={'#99879D'} size={30}/>}
        {profileImage && <Image source={{uri: profileImage}} style={styles.thumbnail}/>}
      </TouchableOpacity>
      <Text style={styles.text}>Upload images and videos of places you'd like to show us!</Text>
      <View style={{flexDirection:'row', flexWrap:'wrap', alignItems: 'center',  justifyContent: 'center'}}>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
        <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete}/>
      </View>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          let imagesArray: string[] = [];
          images.forEach((image) => {
            let imageName = getImageName(image);
            firebaseUpload(image, imageName);
            imagesArray.push(`https://firebasestorage.googleapis.com/v0/b/bogo-client.appspot.com/o/images%2F${imageName}?alt=media`);
          })
          let profileImageName = getImageName(profileImage);
          firebaseUpload(profileImage, profileImageName);
          newUserVar({...newUserVar(), profileImg: profileImageName ? `https://firebasestorage.googleapis.com/v0/b/bogo-client.appspot.com/o/images%2F${profileImageName}?alt=media` : '', 
            // photoAlbum: imagesArray
          });
          console.log(newUserVar());
          navigation.navigate('SummaryScreen');
      }}>
        <IconButton name={'chevron-right'} color={'white'} size={30} bgColor={'#99879D'}/>
      </TouchableOpacity>
      <ProgressBar progress={0.51} color={'#99879D'} style={{height: 5, width: Dimensions.get('window').width}}/>
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
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  tagView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
  },
})
 
export default ImageUploadScreen;