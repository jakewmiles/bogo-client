import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import { MainBottomTabParamList } from './types';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Home">
        <BottomTab.Screen name="Home" component={HomeScreen}/>
        <BottomTab.Screen name="Details" component={DetailsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
