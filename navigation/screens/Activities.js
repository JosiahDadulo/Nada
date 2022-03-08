import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import MultiSelect from 'react-native-multiple-select';


const items = [
    // name key is must. It is to show the text in front
    {id: 1, name: 'Bowling'},
    {id: 2, name: 'Walking'},
    {id: 3, name: 'Movie'},
    {id: 4, name: 'Working Out'},
    {id: 5, name: 'Hiking'},
    {id: 6, name: 'Biking'},
    {id: 7, name: 'Eating'},
    {id: 8, name: 'Coffee'},
    {id: 9, name: 'Coding'},
    {id: 10, name: 'Studying'},
    {id: 11, name: 'Driving'},
    {id: 12, name: 'Music'},
  ];

export default function Activities({navigation}) {
    const [selectedItems, setSelectedItems] = useState([]);
    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
      };
    return(
        <View>
            <Text style={styles.title}>Activities</Text>
            <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={(text) => console.log(text)}
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{color: '#CCC'}}
            submitButtonColor="#48d22b"
            submitButtonText="Submit"
            />
            <TouchableOpacity
            style={styles.submit}
            onPress={()=>navigation.navigate("Home")}>
                    <Text>Sign Up</Text>
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