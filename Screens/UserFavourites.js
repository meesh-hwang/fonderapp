import React, {useEffect, useState} from 'react';
import * as RootNavigation from '../RootNavigation.js';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import { useSelector } from "react-redux";
import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';

const Item = ({id, name, image_url, short_desc }) => {return(
  <TouchableOpacity style={styles.item} onPress={()=>{RootNavigation.navigate('MealInfo', {id: id,meal: name, img: image_url, desc: short_desc })}}>
        <Image source={{uri: image_url}} style={{height:200, minWidth:170, maxWidth:170, resizeMode:'cover', flex:0.5}} />
        <Text style={[styles.name, {flex:0.5, maxWidth:170, minWidth:170}]}>{name}</Text>
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
        <Item id={item.id} name={item.name} image_url={item.image_url} short_desc={item.short_desc} />
    );}

    const [mealData, setMealData] = useState();

    useFocusEffect(
        React.useCallback(()=> {
        var requestOptions = {
            method: 'GET',
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

                            setMealData(unique);
                        })
        .catch(error => console.log('error', error));
    }, []));
    

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
        fontFamily: 'Assistant_700Bold',
        color:'#fff',
        fontSize:16,
        backgroundColor:'#FFCB69',
        paddingVertical:20,
        lineHeight:20,
        flexWrap:'wrap',
        paddingHorizontal:15,
        textAlign:'left'
    },
    item:{
        padding:10,
    }
});


export default UserFavourites;