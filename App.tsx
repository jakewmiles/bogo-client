import React, { } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from '@apollo/react-hooks'
import BrowseScreen from './screens/BrowseScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactsStack from './screens/ContactsStack';
import client from './client';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <ApolloProvider client={client}>
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
          name="Contacts" 
          component={ContactsStack}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
    </ApolloProvider>
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