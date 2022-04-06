import React, {useState, useEffect} from 'react'; 
import * as RootNavigation from '../RootNavigation.js';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';


const MealInfo = ({navigation, route}) => {
const vw = useWindowDimensions().width;
    const [IsReady, SetIsReady] = useState(false);
  let [fontsLoaded]= useFonts({
    Assistant_400Regular,
    Assistant_800ExtraBold,
    Assistant_500Medium,
    Assistant_600SemiBold,
    Assistant_700Bold
    });
  const { meal, img } = route.params;
  const {desc} = route.params;

    console.log(meal, img, desc)

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
        <Image source={{uri: img}} style={{width:vw,height:'40%'}}/>
        <Text style={styles.mealName}>{meal}</Text>
        <Text style={styles.mealDesc}>{desc}</Text>
    </View>
)}

const styles=StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'stretch',

    },
    mealName:{
        fontFamily:"Assistant_700Bold",
        fontSize:20,
        color:"#EC8980",

    },
    mealDesc: {
        fontFamily:'Assistant_500Medium',
        fontSize: 16,
        color:'#000'
    }
})

export default MealInfo;