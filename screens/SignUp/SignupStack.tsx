import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from '../SignUp/LandingScreen';
import SignupScreen from '../SignUp/SignupScreen';
import BirthDateScreen from '../SignUp/BirthDateScreen';
import LocationScreen from '../SignUp/LocationScreen';
import HobbiesScreen from '../SignUp/HobbiesScreen';
import ImageUploadScreen from '../SignUp/ImageUploadScreen';
import SummaryScreen from '../SignUp/SummaryScreen';
import LanguagesScreen from '../SignUp/LanguagesScreen';

interface Props {
  userInfo: {
    id: number,
    name: string,
  }
}

const Stack = createStackNavigator();

const SignupStack = (props: Props) => {
  return ( 
    <Stack.Navigator>
      <Stack.Screen
        name="LandingScreen"
        component={ LandingScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={ SignupScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BirthDateScreen"
        component={ BirthDateScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LocationScreen"
        component={ LocationScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HobbiesScreen"
        component={ HobbiesScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImageUploadScreen"
        component={ ImageUploadScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SummaryScreen"
        component={ SummaryScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LanguagesScreen"
        component={ LanguagesScreen }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
   );
}
 
export default SignupStack;