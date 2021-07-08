import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import BrowseScreen from './BrowseScreen';
import BrowseFilter from './BrowseFilter';
import BrowseAlbum from './BrowseAlbum';
import BrowseReview from './BrowseReview';

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