import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ContactsHome from './ContactsHome';
import ContactsChat from './ContactsChat';

interface Props {
  userInfo: {
    id: number,
    name: string,
  }
}

const Stack = createStackNavigator();

const ContactsStack = (props: Props) => {
  return ( 
    <Stack.Navigator>
      <Stack.Screen
        name="ContactsHome"
        component={ ContactsHome }
        initialParams={{ userInfo: props.userInfo }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactsChat"
        component={ ContactsChat }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
   );
}
 
export default ContactsStack;