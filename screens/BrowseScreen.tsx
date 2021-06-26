import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from '../types';

type BrowseScreenProp = BottomTabNavigationProp<MainBottomTabParamList, 'Browse'>;

export interface BrowseScreenProps {
  
}
 
const BrowseScreen: React.FC<BrowseScreenProps> = () => {
  const navigation = useNavigation<BrowseScreenProp>();
  return ( 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Browse Screen</Text>
    </View>
   );
}
 
export default BrowseScreen;