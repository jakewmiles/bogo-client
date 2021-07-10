import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import FloatingCard from '../../components/FloatingCard';
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
  const [profileImage, setProfileImage] = useState<string | undefined>(undefined);
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

  const getImageName = (uri: string | undefined) => {
    if (uri) {
      const uriSplit = uri.split('/');
      return uriSplit[uriSplit.length - 1]
    }
  }

  const firebaseUpload = async (uri: string | undefined, imageName: string | undefined) => {
    if (uri) {
      const response = await fetch(uri);
      const blob = await response.blob();

      const ref = storage.ref().child(`images/${imageName}`);
      return ref.put(blob);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
      <FloatingCard cardWidth='85%'>
        <View style={{ height: 125, flexDirection: 'row', justifyContent: 'flex-start', width: '90%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={takeImage}
          >
            <View style={styles.profilePicture}>
              {!profileImage && <IconButton name={'camera'} color={'white'} bgColor={'#99879D'} size={30} />}
              {profileImage && <Image source={{ uri: profileImage }} style={styles.thumbnail} />}
            </View>
          </TouchableOpacity>
          <View style={{ width: '65%' }}>
            <Text style={styles.header}>Upload a profile picture</Text>
          </View>
        </View>
      </FloatingCard>
      <FloatingCard cardWidth='85%'>
        <Text style={styles.header}>Upload pictures of places you'd like to show us!</Text>
        <View style={{ height: 325, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
          <PhotoSquare handleUpload={handleUpload} handleDelete={handleDelete} />
        </View>
      </FloatingCard>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }
          }>
          <IconButton name={'chevron-left'} color={'white'} size={30} bgColor={'#99879D'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            let imagesArray: string[] = [];
            images.forEach((image) => {
              let imageName = getImageName(image);
              firebaseUpload(image, imageName);
              imagesArray.push(`https://firebasestorage.googleapis.com/v0/b/bogo-client.appspot.com/o/images%2F${imageName}?alt=media`);
            })
            let profileImageName = getImageName(profileImage);
            firebaseUpload(profileImage, profileImageName);

            newUserVar({
              ...newUserVar(), profileImg: profileImageName ? `https://firebasestorage.googleapis.com/v0/b/bogo-client.appspot.com/o/images%2F${profileImageName}?alt=media` : '',
              userAlbum: imagesArray
            });

            navigation.navigate('SummaryScreen');
          }}>
          <IconButton name={'chevron-right'} color={'white'} size={30} bgColor={'#99879D'} />
        </TouchableOpacity>
      </View>
      <ProgressBar progress={0.61} color={'#99879D'} style={styles.progressBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
  buttons: {
    width: '70%',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  profilePicture: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#99879D',
    borderRadius: 50,
    marginRight: 15,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  progressBar: {
    height: 7,
    width: Dimensions.get('window').width,
    marginTop: 50
  }
})

export default ImageUploadScreen;