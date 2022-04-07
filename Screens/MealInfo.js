import React, {useState, useEffect} from 'react'; 
import * as RootNavigation from '../RootNavigation.js';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import MapView from 'react-native-maps';

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

    const Partners = () => {
      return(
        <View style={styles.partners}>
           <MapView
           mapType={Platform.OS == "android" ? "standard" : "none"} />
          {/* <Text style={styles.partnersTxt}>
            Get it delivered with our partners
          </Text>

          <View style={styles.partnerContainer}>
            <Image source={require('../assets/img/partners/ubereats_icon.png')} style={styles.partnerImg} />
            <Image source={require('../assets/img/partners/skipthedishes_icon.png')} style={styles.partnerImg} />
            <Image source={require('../assets/img/partners/doordash_icon.png')} style={styles.partnerImg} />
            <Image source={require('../assets/img/partners/fantuan_icon.png')} style={styles.partnerImg} />
          </View>

          <Text style={styles.partnersTxt}>
            OR
          </Text>
          <Text style={styles.partnersTxt}>Book a table at a restaurant near you</Text>
          <Image source={require('../assets/img/partners/opentable_icon.png')} style={[styles.partnerImg, {alignSelf:'center'}]} /> */}
          

        </View>
      );
  }

    const FoodItem = () => {
      return(
        <View style={styles.foodItem}>
          <Image source={{uri: img}} style={{width:vw,height:'60%'}}/>
          <View style={styles.mealResult}>
            <Text style={styles.mealName}>{meal}</Text>
            <Text style={styles.mealDesc}>{desc}</Text>
          </View>
        </View>
      );
    }

    const RemoveBtn = () => {
      return(
        <TouchableOpacity style={[styles.removeBtn, {width:vw}]}>
          <Text style={styles.removeBtnTxt}>Remove Item</Text>
        </TouchableOpacity>
      );
    }

  const { meal, img } = route.params;
  const {desc} = route.params;


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
        <FoodItem />
        <Partners />
        <RemoveBtn />
    </View>
)}

const styles=StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between'
    },
    mealName:{
        fontFamily:"Assistant_700Bold",
        fontSize:21,
        color:"#E66255",
        lineHeight:40
    },
    mealDesc: {
        fontFamily:'Assistant_600SemiBold',
        color:'#000',
        lineHeight:20,
        fontSize:12
    },
    partners: {
      width:'100%',
      paddingHorizontal:20,
      flexBasis:'40%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      height:'100%',
      marginHorizontal:10
    },
    partnerContainer: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:20,
    },
    partnerImg: {
      width:50,
      marginTop:20,
      marginBottom:5,
      height:50,
      paddingHorizontal:5
    },
    partnersTxt:{
      fontFamily:'Assistant_800ExtraBold',
      fontSize:14,
      textAlign:'center',
      paddingTop:10
    },
    mealResult: {
      backgroundColor:'#F9D8D5',
      paddingVertical:20,
      paddingHorizontal:20,
      paddingBottom:40
    },
    removeBtn: {
      backgroundColor:'#FFCB69',
      display:'flex',
      flexDirection:'column',
      alignItems:"center",
      justifyContent:'center',
    },
    removeBtnTxt: {
      textAlign:'center',
      textDecorationLine:'underline',
      fontSize:11,
      fontFamily:'Assistant_700Bold',
      paddingVertical:15
    },
    foodItem:{
      flexBasis:'50%',
      
    }
})

export default MealInfo;