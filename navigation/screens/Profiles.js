import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Slideshow from '../../navigation/components/SlideShow'

export default function ProfilesScreen({navigation}){
    return(
        <View style = {{ alignItems: 'center', justifyContent: 'center'}}>
            <Slideshow></Slideshow>
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
        bottom: -40,
        width: deviceWidth -250,
        borderRadius: radius,
        height: 55,
        textAlign: 'center'
    }, 
    text:{
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    }
});



