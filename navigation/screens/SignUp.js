import React from 'react';
import {SectionList, StyleSheet, View, Text, TouchableOpacity, Button, Title} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Audio} from 'expo-av';

import MainContainer from '../MainContainer';
import { elementsThatOverlapOffsets } from 'react-native/Libraries/Lists/VirtualizeUtils';


let recording = new Audio.recording();

const Login = () => {
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
            <Text style={styles.title}> Nada Sign Up</Text>
            <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    keyboardType="text"
            />
            <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    keyboardType="text"
            />
            <TextInput
                    style={styles.input}
                    placeholder="Bio"
                    keyboardType="text"
            />
            <Text>{message}</Text>
           <Button
           title={recording ? 'Stop Recording' : 'Start Recording'} 
           onPress={()=> (recording ? stopRecording() : startRecording())}
           />
           {getRecordingLines()}

            <TouchableOpacity
            style={styles.button}>
                    <Text>Add Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}>
                    <Text>Profile Image</Text>
            </TouchableOpacity><TouchableOpacity
            style={styles.button}>
                    <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
    )
}


const returnList =  () => {
    return(
        <View>
 <SectionList
            sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
             ]}
             renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
             renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
             keyExtractor={(item, index) => index}
       />
        </View>
       
    )
}

export default Login;
 
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
        borderColor: '#87CEEE'
      },
    prompt: {
        width: 50
    },
    button: {
        alignItems: 'center',
        padding: 10,
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
    }
})