import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




export default function PhoneNumber({navigation}){

    return(
        <View>
            <Text style={styles.title}>Nada Phone Number Verification</Text>
            <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"/>
            <TouchableOpacity
            style={styles.submit}
            onPress={()=>navigation.navigate("SignUp")}>
                    <Text>Submit Phone Number</Text>
            </TouchableOpacity>
        </View>
        
    )
}

 
const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        padding: 12,
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    submit: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#87CEEE', 
        textAlign: 'center',        
        height: 50, 
    }
})