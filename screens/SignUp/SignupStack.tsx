import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import HobbiesScreen from '../SignUp/HobbiesScreen';
import ImageUploadScreen from '../SignUp/ImageUploadScreen';
import LandingScreen from '../SignUp/LandingScreen';
import LanguagesScreen from '../SignUp/LanguagesScreen';
import SigninScreen from '../SignUp/SigninScreen';
import SignupScreen from '../SignUp/SignupScreen';
import SummaryScreen from '../SignUp/SummaryScreen';
import PersonalInfoScreen from './PersonalInfoScreen';
import ReviewScreen from './ReviewScreen';

interface Props {
 
}

const Stack = createStackNavigator();

const SignupStack = (props: Props) => {

  return ( 
    <Stack.Navigator
      screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}
    >
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
        name="SigninScreen"
        component={ SigninScreen }
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalInfoScreen"
        component={ PersonalInfoScreen }
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
      <Stack.Screen
        name="ReviewScreen"
        component={ ReviewScreen }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
   );
}
 
export default SignupStack;