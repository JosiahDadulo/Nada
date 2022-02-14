import * as React from 'react';
import {View, Text} from 'react-native';

export default function PersonalScreen({navigation}){
    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={()=> alert('This is the Personal Profile Page.')} style={{fontSize: 26, fontWeight: 'bold'}}> Personal Profile Screen</Text>
        </View>
    );
}