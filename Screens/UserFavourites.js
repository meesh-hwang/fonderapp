import React, {useEffect, useState} from 'react';
import * as RootNavigation from '../RootNavigation.js';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';

const DATA = [
    {
        id: 'ah',
        title: 'Piss Pills',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'bah',
        title: 'Gay Sex',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'cah',
        title: 'Bitch Patties',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'dah',
        title: 'Milf Hunter',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'eah',
        title: 'Baby Puncher',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'fah',
        title: 'Slutty Dog',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'gah',
        title: 'Horse Shit',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    },
    {
        id: 'hah',
        title: 'Bitch Nugget',
        keyImage: 'https://fonder.edwardlin.ca/api/img/meals/Chili-Cheese-Dog-f.jpg',
        short_desc:'ilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfsilovemilfs ilovemilfsilovemilfs'
    }
];

const Item = ({ title, keyImage, short_desc }) => {return(
  <TouchableOpacity style={styles.item} onPress={()=>{RootNavigation.navigate('MealInfo', {meal: title, img: keyImage, desc: short_desc })}}>
        <Image source={{uri: keyImage}} style={{height:200, width:170, resizeMode:'cover'}} />
        <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);}


const UserFavourites = () => {
    const [IsReady, SetIsReady] = useState(false);
    let [fontsLoaded]= useFonts({
        Assistant_400Regular,
        Assistant_800ExtraBold,
        Assistant_500Medium,
        Assistant_600SemiBold,
        Assistant_700Bold
        });

    const renderItem = ({ item }) => {return(
        <Item title={item.title} keyImage={item.keyImage} />
    );}

    const [mealData, setMealData] = useState();

    useEffect(()=> {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        fetch("https://fonder.edwardlin.ca/api/v1/users/read.php?id=1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result.user[0].fav_meals.meals[0]) )
        .catch(error => console.log('error', error));
    }, []);
    

if(!fontsLoaded) {
    return(
      <AppLoading
        startAsync={fontsLoaded}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
            return(
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    
    
    
};


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
        flex:1
    },
    title: {
        fontFamily: 'Assistant_600SemiBold',
        color:'#fff',
        fontSize:16,
        backgroundColor:'#FFCB69',
        textAlign:'center',
        paddingVertical:10,
        lineHeight:30
    },
    item:{
        padding:10,
    }
});


export default UserFavourites;