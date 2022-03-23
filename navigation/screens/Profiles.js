import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
const { width } = Dimensions.get('window');

export default function ProfilesScreen({navigation}){
    return(
        <View style = {{ alignItems: 'center', justifyContent: 'center'}}>
            <ScrollView 
                horizontal= {true}
                decelerationRate={0}
                snapToInterval={width - 60}
                snapToAlignment={"center"}
                contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 30,
            }}>
            <Card1></Card1>
            <Card2></Card2>
            </ScrollView>
            <TouchableOpacity style={styles.wink}>
                <Text style={styles.text}> Wink</Text>
            </TouchableOpacity>
        </View>
    );
}

const radius = 20;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    wink:{
        backgroundColor: '#ffff00',
        bottom: -50,
        width: deviceWidth -250,
        borderRadius: radius,
        height: 35
    }, 
    text:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
});



