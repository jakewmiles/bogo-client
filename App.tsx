import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from './types';
import FavouritesScreen from './screens/FavouritesScreen';
import BrowseScreen from './screens/BrowseScreen';
import ProfileScreen from './screens/ProfileScreen';
import MessagesScreen from './screens/MessagesScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Browse">
        <BottomTab.Screen name="Favourites" component={FavouritesScreen}/>
        <BottomTab.Screen name="Browse" component={BrowseScreen}/>
        <BottomTab.Screen name="Messages" component={MessagesScreen}/>
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
