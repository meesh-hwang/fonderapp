import React, {useEffect, useState} from 'react';
import * as RootNavigation from '../RootNavigation.js';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import { useSelector } from "react-redux";
import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';

const Item = ({ name, image_url, short_desc }) => {return(
  <TouchableOpacity style={styles.item} onPress={()=>{RootNavigation.navigate('MealInfo', {meal: name, img: image_url, desc: short_desc })}}>
        <Image source={{uri: image_url}} style={{height:200, width:170, resizeMode:'cover'}} />
        <Text style={styles.name}>{name}</Text>
  </TouchableOpacity>
);}


const UserFavourites = ({navigation}) => {
    const userId = useSelector((state) => state.user.user);
    const [IsReady, SetIsReady] = useState(false);
    let [fontsLoaded]= useFonts({
        Assistant_400Regular,
        Assistant_800ExtraBold,
        Assistant_500Medium,
        Assistant_600SemiBold,
        Assistant_700Bold
        });

    const renderItem = ({ item }) => {return(
        <Item name={item.name} image_url={item.image_url} short_desc={item.short_desc} />
    );}

    const [mealData, setMealData] = useState();

    useEffect(()=> {

        var raw = JSON.stringify({
        "user_id": user_id,
        "cuisine_id": item_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://fonder.edwardlin.ca/api/v1/users/read.php?id="+userId, requestOptions)
        .then(response => response.json())
        .then(result => {
                            const favMeals = result.users[0].fav_meal.meals;

                            // REMOVE DUPLICATE MEALS
                            const uniqueIds = [];
                            const unique = favMeals.filter(favMeals => {
                            const isDuplicate = uniqueIds.includes(favMeals.id);
                            if (!isDuplicate) {
                                uniqueIds.push(favMeals.id);
                                return true;
                            }
                            });

                            // console.log(unique)
                            setMealData(unique);
                        })
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
                    data={mealData}
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
        flex:1,
    },
    name: {
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