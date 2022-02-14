import * as React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import ProfilesScreen from './screens/Profiles';
import LikesScreen from './screens/Likes';
import PersonalScreen from './screens/Personal';

//Screen Names
const profilesName = 'People';
const likesName = 'Reactions';
const personalName = 'Personal Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={profilesName}
            screenOptions={({route}) =>({
                tabBarIcon: ({focused,color, size}) =>{
                    let iconName;
                    let rn = route.name;

                    if(rn === profilesName){
                        iconName = focused ? 'people' : 'people-outline'
                    } else if( rn == likesName){
                        iconName = focused ? 'heart' : 'heart-outline'
                    } else if(rn == personalName){
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
            
            <Tab.Screen name={profilesName} component={ProfilesScreen}/>
            <Tab.Screen name={likesName} component={LikesScreen}/>
            <Tab.Screen name={personalName} component={PersonalScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}