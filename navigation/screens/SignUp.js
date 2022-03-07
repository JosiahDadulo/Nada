import React, {useState}from 'react';
import {ScrollView, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Button, Sele} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Audio} from 'expo-av'
import { NavigationContainer } from '@react-navigation/native';

import activities from './Activities';
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability';

export default function Login ({ navigation }){
    const [recording, setRecording] = React.useState();
    const [recordings, setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");

    async function startRecording(){
        try{
            const permission = await Audio.requestPermissionsAsync();

            if(permission.status === "granted"){
                await Audio.setAudioModeAsync({
                    allowedRecordingIOS: true,
                    playsInSilentModeIOS: true
                });
                const {recording} = await Audio.Recording.createAsync(
                    Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
                );

                setRecording(recording);
            } else{
                setMessage("Please grant permission to app to access microphone")
            }
        } catch(err){
            console.error('Failed to start recording', err)
        }
    }

    async function stopRecording(){
        setRecording(undefined);
        await recording.stopRecording();

        let updateRecordings = [...recordings];
        const {sound, status} = await recording.createNewLoadedSoundAsync();
        updateRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        })

        setRecording(updateRecordings);
    }

    function getDurationFormatted(millis){
        console.log(millis)
        const minutes = millis/ 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay)* 60);
        const secondDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return    `${minutesDisplay}:${secondDisplay}`;
    }

    function getRecordingLines(){
        return recordings.map((recordingLine, index) => {
            return (
                <View key={index} style={styles.row}>
                    <Text style={styles.fill}> Recording {index + 1} - {recordingLine.duration} </Text>
                    <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
                </View>
            );
        })
    }
    return(
        <View>
            <ScrollView>
            <Text style={styles.title}> Nada Sign Up</Text>
            
            <Text style={styles.heading}>First Name</Text>
            <TextInput
                    style={styles.input}
                    placeholder="First Name"            />
            <Text style={styles.heading}>Last Name</Text>
            <TextInput
                    style={styles.input}
                    placeholder="Last Name"
            />
            <Text style={styles.heading}>Bio: Tell us a little bit about yourself.</Text>
            <TextInput
                    style={styles.input}
                    placeholder="Bio"
            />
            <Text style={styles.heading}>Audio Prompt</Text>
           <Button
           title={recording ? 'Stop Recording' : 'Start Recording'} 
           onPress={()=> (recording ? stopRecording() : startRecording())}
           />
           {getRecordingLines()}
            <TouchableOpacity
            style={styles.button}>
                    <Text>Profile Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.submit}
            onPress={()=>navigation.navigate("Activities")}
             >
                    <Text>Activities</Text>
            </TouchableOpacity>
            </ScrollView>
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
    heading: {
        textAlign: 'center',
        padding: 5,
        fontSize: 15,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 0,
        borderColor: '#87CEEE'
      },
    prompt: {
        width: 50
    },
    button: {
        alignItems: 'center',
        padding: 0,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#87CEEE', 
        textAlign: 'center',        
        height: 50, 
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fill: {
        flex: 1,
        margin: 16
    },
    button: {
        margin: 16,
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