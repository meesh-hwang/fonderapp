import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-web-swiper';



const Onboarding = ({navigation, cardData,}) => {
    
const swiperRef = useRef();
console.log(swiperRef)

    return(
        <View style= {styles.container}>
            <Text>Onboarding Screen</Text>
            <Image style={styles.fries} source={require('../assets/img/fries.png')} />
            <Swiper ref={swiperRef}
            swipe controlsProps={{
                DotComponent:({ index, activeIndex, isActive, onPress }) => <TouchableOpacity onPress={onPress} 
                style={isActive? styles.activeDot : styles.dot}></TouchableOpacity>,
                dotsTouchable:true
                }}>
                <View style={[styles.slideContainer,styles.slide1]}>
                    <Text>Slide 1</Text>
                </View>
                <View style={[styles.slideContainer,styles.slide2]}>
                    <Text>Slide 2</Text>
                </View>
                <View style={[styles.slideContainer,styles.slide3]}>
                    <Text>Slide 3</Text>
                </View>
            </Swiper>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Onboarding

const styles = StyleSheet.create({
     container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
  activeDot: {
    backgroundColor:'red',width:40, height:10, marginHorizontal:10
  },
  dot: {
    backgroundColor:'white',width:40, height:10, marginHorizontal:10

  }
})