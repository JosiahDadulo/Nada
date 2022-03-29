import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Signup from "./navigation/screens/SignUp";
import Activities from "./navigation/screens/Activities";
import PhoneNumber from "./navigation/screens/PhoneNumber"
import ChatScreen from "./navigation/screens/ChatScreen";
import ChatCard from './components/ChartCard';
import Chat from './screens/Chat'

const Stack = createStackNavigator();

export default () =>{
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
          <Stack.Screen name ="Chat" component={Chat}/>
        <Stack.Screen name = "ChatCard" component={ChatCard}/>
        <Stack.Screen name ="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
};