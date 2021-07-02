import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { ApolloProvider } from '@apollo/react-hooks';
import BrowseScreen from './screens/BrowseScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactsStack from './screens/ContactsStack';
import SignupStack from './screens/SignUp/SignupStack';
import client from './client';
import { makeVar } from '@apollo/client';
export const userVar = makeVar<any>([]);
import { isLoggedInVar } from './client'
import { useReactiveVar } from '@apollo/client';

export default function App() {
  const Tab = createBottomTabNavigator();
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log(isLoggedIn)



  let homeScreen;


  if (isLoggedIn) {
    homeScreen = (
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
  } else {
    homeScreen = (
      <NavigationContainer>
        <SignupStack />
      </NavigationContainer>
    )
  }
  
  
  return (
    <ApolloProvider client={client}>
    <View style={styles.view}>
      {homeScreen}
    </View>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  tab: {
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'black',
  }
})