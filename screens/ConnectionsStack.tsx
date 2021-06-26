import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ConnectionsHome from './ConnectionsHome';
import ConnectionsChat from './ConnectionsChat';

interface Props {
  userInfo: {
    id: number,
    name: string,
  }
}

const Stack = createStackNavigator();

const ConnectionsStack = (props: Props) => {
  return ( 
    <Stack.Navigator>
      <Stack.Screen
        name="ConnectionsHome"
        component={ ConnectionsHome }
        initialParams={{ userInfo: props.userInfo }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConnectionsChat"
        component={ ConnectionsChat }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
   );
}
 
export default ConnectionsStack;