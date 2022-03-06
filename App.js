import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Signup from "./navigation/screens/SignUp";
import PhoneNumber from "./navigation/screens/PhoneNumber"
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const Stack = createStackNavigator();

export default () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name ="Sign Up" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
};