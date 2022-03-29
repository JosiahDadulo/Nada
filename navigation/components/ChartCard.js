import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import exampleImage from '../../assets/vd.jpg'

function ChatCard({ navigation }){
    return(
        <View style={styles.cardContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("ChatScreen")}>
                <Image style={styles.imageStyle} source={exampleImage} />
                <Text style={styles.name}>Vin Diesel</Text>
                <Text style={styles.message}>LatestChat: You can do anything with family and I love to drive</Text>
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
        height: 100,
        borderRadius: radius,
        margin: 10
    },
    imageStyle: {
        height: 100,
        width: deviceWidth -250,
        borderTopLeftRadius: radius,
        borderBottomLeftRadius: radius
    },
    name: {
        width:100,
        fontSize: 15, 
        fontWeight: 'bold',
        left: 120,
        bottom: 90
    },
    message: {
        width: 200,
        fontSize: 12, 
        height: 50, 
        left: 120,
        bottom: 90,
        backgroundColor: 'white',
        borderRadius: 10
    },
});
export default ChatCard;