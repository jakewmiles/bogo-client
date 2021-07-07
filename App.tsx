import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApolloProvider } from '@apollo/react-hooks';
import BrowseStack from './screens/BrowseStack';
import ProfileScreen from './screens/ProfileScreen';
import PlacesStack from './screens/PlacesStack';
import ContactsStack from './screens/ContactsStack';
import SignupStack from './screens/SignUp/SignupStack';
import client from './client';
import { isLoggedInVar } from './client'
import { useReactiveVar } from '@apollo/client';
import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold,
  RedHatDisplay_700Bold,
  PublicSans_500Medium,
} from "@expo-google-fonts/dev";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const Tab = createBottomTabNavigator();
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_700Bold,
    RedHatDisplay_700Bold,
    PublicSans_500Medium
  });

  let homeScreen;

  if (isLoggedIn) {
    homeScreen = (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: '#eeeeee',
            inactiveBackgroundColor: '#eeeeee',
            activeTintColor: '#99879D',
            inactiveTintColor: '#cccccc',
            tabStyle: styles.tab,
            labelStyle: styles.tabText,
            showLabel: false,
          }}>
          <Tab.Screen
            name="Browse"
            component={BrowseStack}
            options={{
              tabBarLabel: 'Browse',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="magnify"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Contacts"
            component={ContactsStack}
            options={{
              tabBarLabel: 'Contacts',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="forum-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Places"
            component={PlacesStack}
            options={{
              tabBarLabel: 'Places',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="globe-model"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({
                color,
                size,
              }: {
                color: string;
                size: number;
              }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    homeScreen = (
      <NavigationContainer>
        <SignupStack />
      </NavigationContainer>
    )
  }

  if (fontsLoaded) {
    return (
      <ApolloProvider client={client}>
        <View style={styles.view}>
          {homeScreen}
        </View>
      </ApolloProvider>
    );
  } else {
    return <View></View>
  }
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