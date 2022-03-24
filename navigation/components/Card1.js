import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import exampleImage from '../../assets/paulwalker.jpg'
var nameAge = "Paul Walker, 21"

const Card1 = () => {
    return(
        <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={exampleImage}/>
            <Text style={styles.name}>{nameAge}</Text>
        </View>
    );
};
const radius = 20;
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer:{
        justifyContent: 'center',
        width: deviceWidth - 25,
        height: 500,
        margin: 10,
        top: -10
    },
    imageStyle: {
        height: 500,
        width: deviceWidth-25,
        borderRadius: radius,
        top: 30
    },
    name: {
        textAlign: 'center',
        fontSize: 20, 
        fontWeight: 'bold',
        left: 10,
        bottom: 35,
    },
});
export default Card1;