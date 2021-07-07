import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SearchPlacesScreen from './SearchPlacesScreen';
import DisplayPlacesScreen from './DisplayPlacesScreen';

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