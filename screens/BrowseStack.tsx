import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import BrowseScreen from './BrowseScreen';
import BrowseFilter from './BrowseFilter';

interface Props {
  userInfo: {
    id: number,
    name: string,
  }
}

const Stack = createStackNavigator();

const BrowseStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BrowseScreen"
        component={BrowseScreen}
        initialParams={{ userInfo: props.userInfo }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BrowseFilter"
        component={BrowseFilter}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default BrowseStack;