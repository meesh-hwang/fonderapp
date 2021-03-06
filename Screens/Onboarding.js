import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-web-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';

import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';


const Onboarding = ({navigation}) => {
    
  const vw = useWindowDimensions().width;
  const vh = useWindowDimensions().height;

  const [IsReady, SetIsReady] = useState(false);
  let [fontsLoaded]= useFonts({
    Assistant_400Regular,
    Assistant_800ExtraBold,
    Assistant_500Medium,
    Assistant_600SemiBold,
    Assistant_700Bold
    });
  let swiperRef = useRef();

  const NextArrow = () => {
    return (
      <TouchableOpacity style={[styles.skipArrow, {fontFamily:'Assistant_800ExtraBold'}]} onPress={()=>swiperRef.current.goTo(2)}>
          <Text style={styles.skipTxt} >SKIP</Text>
        <Icon name="arrow-forward-circle-sharp" size={30} color="#EC8980" />
      </TouchableOpacity>
    );
  }

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
      <View style= {[styles.container, {width:vw, height:vh, overflowX:'hidden'}]}>
          <Image style={styles.fries} source={require('../assets/img/fries.png')} />
          <View style={styles.people}>
            <Image style={styles.girl} source={require('../assets/img/onboarding-girl.png')} />
            <Image style={styles.guy} source={require('../assets/img/onboarding-guy.png')} />
          </View>
          <View style ={styles.swiper}>
            <Swiper ref={swiperRef}
                swipe controlsProps={{
                prevTitle: '',
                nextPos: 'top-right',
                NextComponent:({onPress})=>
                <NextArrow onPress={onPress} />,
                DotComponent:({ index, activeIndex, isActive, onPress }) => <TouchableOpacity onPress={onPress} 
                style={isActive? styles.activeDot : styles.dot}></TouchableOpacity>,
                dotsTouchable:true
                }}>
                <View style={styles.slideContainer}>
                    <Text style={styles.sliderTxt}>Swipe right on dishes that you are craving. Find your 'swipe rights' in your favourite list. If the dish you see isn't your style, simply swipe left. </Text>
                </View>
                <View style={styles.slideContainer}>
                    <Text style={styles.sliderTxt}>Satisfy your craving quickly by ordering through your preferred delivery app. Want an in person experience? Make a reservation through OpenTable.</Text>
                </View>
                <View style={styles.slideContainer}>
                  <Text style={styles.loginHeader}>Let's Get Started</Text>
                    
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Login")}>
                      <Text style={styles.btnTxt}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Signup")}>
                      <Text style={styles.btnTxt}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
          </View>
      </View>
    )
}



export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-end',
    backgroundColor:'#E66255'
  },
  skipTxt:{
    fontWeight:"800", 
    fontSize:20,
    color:"#EC8980",
    fontFamily:'Assistant_800ExtraBold',
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:30,
    backgroundColor: '#FFFBF3',
  },
  activeDot: {
    backgroundColor:'#E66255',width:40, height:5, marginHorizontal:10
  },
  dot: {
    backgroundColor:'#F3B0AA',width:40, height:5, marginHorizontal:10

  },
  skipArrow: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width: 80,
    justifyContent:'space-between',
    paddingTop:30
  },
  fries:{
    position:'absolute',
    width:300,
    height:'80%',
    resizeMode:'contain',
    right:0,
    top:0
  },
  swiper:{
    flex:0.5,
    alignSelf:'flex-end',
    width:'100%',
    height:'100%'
  },
  people: {
    height:'30%',
    width:'90%',
    position:'absolute',
    display:'flex',
    flexWrap:'nowrap',
    flexDirection:'row',
    zIndex:1,
    alignItems:'flex-end',
    justifyContent:'flex-start',
    left:-20,
    bottom:'40%'
  },
  girl: {
    width: '60%',
    height: '100%',
    resizeMode:'contain',
    marginRight:-50,
  },
  guy: {
    width: '40%',
    height:'100%',
    resizeMode:'contain',
    bottom:-40

  },
  sliderTxt: {
    display:'flex',
    flexDirection:'column',
    textAlign:'center',
    fontFamily:'Assistant_700Bold',
    alignItems:'center',
    color:"#EC8980",
    fontSize:18

  },
  loginHeader: {
    fontFamily:'Assistant_800ExtraBold',
    fontWeight:"800",
    fontSize:25,
    color:"#EC8980",
  },
  btn: {
    backgroundColor: '#FFCB69',
    width:200,
    display:'flex',
    justifyContent:'center',
    textAlign:'center',
    paddingVertical:5,
    marginVertical:5,
    borderRadius:40
  },
  btnTxt: {
    fontFamily:'Assistant_700Bold',
    fontSize:18,
    alignSelf:'center',
    color:'white'
  }
})