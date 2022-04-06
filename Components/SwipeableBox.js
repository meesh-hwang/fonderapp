import React, { useState, useEffect  } from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'
import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';
import { useFonts } from 'expo-font';


const SwipeableBox = ({ meals }) =>{
    var tags = meals.tags.split(" ").join("");
    tags = (tags.split(','));

    let [fontsLoaded]= useFonts({
        Assistant_400Regular,
        Assistant_800ExtraBold,
        Assistant_500Medium,
        Assistant_600SemiBold,
        Assistant_700Bold
        });

    function displayTags(){
        return tags.map((tag, index) => <Text style={index==0 ?styles.pTagText : styles.tagText}key={index}>{tag}</Text>)
    }

    return(
        <View style={styles.container}>
            <Image source={{ uri: meals.image_url}}
                style={styles.image}
            
            />
            <View style={styles.content}>
                <Text style={styles.name}>{meals.name}</Text>
                <View style={styles.tags}>
                    {displayTags()}
                </View>
            </View>
            
        </View>
    )
}
export default SwipeableBox;

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 25
    },
    image:{
        height: Dimensions.get("window").height * 0.6,
        width: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    content:{
        backgroundColor: '#ffe5b4',
        paddingHorizontal: 25,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: Dimensions.get("window").height * 0.2,
        justifyContent: 'center'

    },
    name:{
        fontSize: 26,
        color: '#e66255',
        fontFamily:'Assistant_800ExtraBold',
        marginBottom: 10
    },
    tags:{
        flexDirection: 'row',
    },
    tagText:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 25,
        color: '#EC8980',
        fontFamily: 'Assistant_700Bold',
        fontSize: 15,
        borderColor: '#EC8980',
        borderWidth: 2
    },
    pTagText:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        borderRadius: 25,
        color: '#fff',
        fontFamily: 'Assistant_700Bold',
        fontSize: 15,
        backgroundColor: '#EC9890'
    }
})