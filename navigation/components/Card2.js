import React from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
import exampleImage from '../../assets/vd.jpg'

const Card2 = () => {
    return(
        <View style={styles.cardContainer}>
            <Text style={styles.bioTitle}>Bio:</Text>
            <View style={{height: 80}}>
            <ScrollView style={styles.bioText}>
                <Text>I love driving cars and acting. I want friends and love to drink coffee. I am an actor in the famous fast and furious franchise. I died in 2013 from a car accident.</Text>
            </ScrollView>
            </View>
            <View style={{height: 250}}>
            <Text style={styles.act}>Activties: </Text>
            <ScrollView style={styles.actText}>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
                <Text>Driving</Text>
            </ScrollView>
            </View>
        </View>
    );
};
const radius = 20;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer:{
        justifyContent: 'center',
        width: deviceWidth - 25,
        backgroundColor: '#add8e6',
        top: 10,
        borderRadius: radius,
        height: 500,
        margin: 10
    },
    bioTitle:{
        fontSize: 25,
        left: 25,
        top: -20,
        fontWeight: 'bold'
    },
    bioText:{
        backgroundColor: 'white',
        fontSize: 15,
        width: 250,
        top: -12,
        left: 25,
        height: 50,
        borderRadius: 10
    },
    act:{
        fontSize: 25,
        left: 25,
        top: -8,
        fontWeight: 'bold'
    },
    actText:{
        backgroundColor: 'white',
        fontSize: 15,
        width: 250,
        top: -3,
        left: 25,
        height: 50,
        borderRadius: 10
    }
});
export default Card2;