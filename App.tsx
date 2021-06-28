import React, {} from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BrowseScreen from './screens/BrowseScreen';
import ProfileScreen from './screens/ProfileScreen';
import ConnectionsStack from './screens/ConnectionsStack';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: '#dddddd',
          tabStyle: styles.tab,
          labelStyle: styles.tabText,
          }}>
        <Tab.Screen 
          name="Browse" 
          component={BrowseScreen}
        />
        <Tab.Screen 
          name="Connections" 
          component={ConnectionsStack}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'black',
  }
})