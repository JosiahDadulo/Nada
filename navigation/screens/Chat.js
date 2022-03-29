import * as React from 'react';
import {View, ScrollView} from 'react-native';
import ChatCard from "../components/ChartCard";

export default function ProfilesScreen({navigation}){
    return(
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView>
                <ChatCard></ChatCard>
            </ScrollView>
        </View>
    );
}

