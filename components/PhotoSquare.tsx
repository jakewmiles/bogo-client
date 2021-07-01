import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import IconButton from './IconButton';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface PhotoSquareProps {
  
}
 
const PhotoSquare: React.FC<PhotoSquareProps> = () => {
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Camera roll permissions not given!')
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    })
    if (!result.cancelled) {
      setImage(result.uri)
      console.log(result.uri);
      
    }
  };

  return ( 
    <View>
      {!image && <TouchableOpacity 
        style={styles.box}
        onPress={pickImage}
      >
        <IconButton name='plus-circle-outline' color='#99879D75' bgColor='transparent' size={40}/>
      </TouchableOpacity>}
      {image && <TouchableOpacity 
        onPress={pickImage}
      >  
        {image && <Image source={{uri: image}} style={styles.thumbnail}/>}
      </TouchableOpacity>}
    </View>
   );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#DDDDDD90',
    borderWidth: 1,
    borderColor: '#99879D75',
    height: 125,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  thumbnail: {
    height: 125,
    width: 125,
    aspectRatio: 1,
    margin: 1,
    borderWidth: 1,
    borderColor: '#99879D75',
  }
})
 
export default PhotoSquare;