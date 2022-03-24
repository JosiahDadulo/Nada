import * as React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import LikeCard from "../components/LikeCard.js";


export default function LikesScreen({navigation}){
    return(
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView>
                <LikeCard></LikeCard>
                <LikeCard></LikeCard>
                <LikeCard></LikeCard>
                <LikeCard></LikeCard>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    
});