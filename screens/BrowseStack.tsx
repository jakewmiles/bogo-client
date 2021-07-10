import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import BrowseAlbum from './BrowseAlbum';
import BrowseFilter from './BrowseFilter';
import BrowseReview from './BrowseReview';
import BrowseScreen from './BrowseScreen';

const Stack = createStackNavigator();

const BrowseStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseFilter"
        component={BrowseFilter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseAlbum"
        component={BrowseAlbum}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseReview"
        component={BrowseReview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default BrowseStack;