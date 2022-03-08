import React, {useState}from 'react';
import {ScrollView, StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

export default function Login ({ navigation }){
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
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
            <Text style={styles.heading}>Profile Image</Text>
            <Button title="Pick Profile Image" style={styles.button} onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} 
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