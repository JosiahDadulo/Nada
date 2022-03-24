import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import exampleImage from '../../assets/vd.jpg'
import Activities from '../screens/Activities';

function LikeCard(){
    return(
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={exampleImage}/>
            <Text style={styles.name}>Vin Diesel, </Text>
            <Text style={styles.age}> 21</Text>
            <Text style={styles.bio}>Bio: You can do anything with family and I love to drive</Text>
            <Text style={styles.activities}>Activies: Bowling, Driving, Drinking</Text>
            <TouchableOpacity style={styles.wink}>
                <Text>Wink Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const radius = 20;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer:{
        width: deviceWidth - 25,
        backgroundColor: '#add8e6',
        height: 200,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 25,
        margin: 10
    },
    imageStyle: {
        height: 200,
        width: deviceWidth -210,
        borderTopLeftRadius: radius,
        borderBottomLeftRadius: radius
    },
    name: {
        width:100,
        fontSize: 15, 
        fontWeight: 'bold',
        left: 155,
        bottom: 180
    },
    age: {
        width: 20,
        fontSize: 15, 
        fontWeight: 'bold',
        left: 227,
        bottom: 202
    },
    bio: {
        width: 150,
        fontSize: 12, 
        left: 156,
        bottom: 190
    },
    activities: {
        width: 150,
        fontSize: 12, 
        left: 156,
        bottom: 180
    },
    wink: {
        backgroundColor: '#ffff00', 
        width: deviceWidth- 290,
        left: 198,
        bottom: 160,
        borderRadius: 20,
    }
});
export default LikeCard;