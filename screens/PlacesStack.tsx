import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import DisplayPlacesScreen from './DisplayPlacesScreen';
import SearchPlacesScreen from './SearchPlacesScreen';

const Stack = createStackNavigator();

const BrowseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchPlacesScreen"
        component={SearchPlacesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DisplayPlacesScreen"
        component={DisplayPlacesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default BrowseStack;