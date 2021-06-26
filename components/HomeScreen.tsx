import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../types';

type HomeScreenProp = BottomTabNavigationProp<MainBottomTabParamList, 'Home'>;

export interface HomeScreenProps {
  
}
 
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
   );
}
 
export default HomeScreen;