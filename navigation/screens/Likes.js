import * as React from 'react';
import {View, Text} from 'react-native';

export default function LikesScreen({navigation}){
    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={()=> alert('This is the Winks and Hand Waves Page.')} style={{fontSize: 26, fontWeight: 'bold'}}> Reactions Screen</Text>
        </View>
    );
}