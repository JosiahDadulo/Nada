import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Signup from "./navigation/screens/SignUp";
import Activities from "./navigation/screens/Activities";
import PhoneNumber from "./navigation/screens/PhoneNumber"
import ChatScreen from "./navigation/screens/ChatScreen";
import ChatCard from './navigation/components/ChartCard';
const Stack = createStackNavigator();

export default () =>{
  return(
    <NavigationContainer independent={true}>
        <Stack.Navigator>
        <Stack.Screen name ="Phone Number" component={PhoneNumber}/>
        <Stack.Screen name ="SignUp" component={Signup} />
        <Stack.Screen name ="Activities" component={Activities}/>
        <Stack.Screen name ="Home" component={MainContainer} options={{headerShown: false, headerLeft: false }}/>
        <Stack.Screen name="ChatCard" component={ChatCard}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
};