import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BrowseScreen from './screens/BrowseScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MainBottomTabParamList } from './types';
import ChatScreen from './screens/ChatScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Browse">
        <BottomTab.Screen name="Browse" component={BrowseScreen}/>
        <BottomTab.Screen name="Chat" component={ChatScreen}/>
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
