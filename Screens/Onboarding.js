import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-anchor-carousel';

const cardData = () => [
    {
        content: "Swipe right on dishes that you are craving. Find your 'swipe rights' in your favourite list. If the dish you see isn't your style, simply swipe left."
    },
    {

    }
]

const Card = ({item, index}) => {
    return(
    <View style={styles.card}>
        <Text>Random shit goes here</Text>
    </View>
    );
}

const Onboarding = ({navigation}) => {
    
    const carouselRef = React.useRef(null);

    return(
        <View style= {styles.container}>
            <Text>Onboarding Screen</Text>
            <Image style={styles.fries} source={require('../assets/img/fries.png')} />
            <Carousel
                ref={carouselRef}
                data={cardData}
                renderItem={Card}
                style={styles.carousel}
                itemWidth={'100%'}
                containerWidth={'100%'}
                separatorWidth={0}
            />
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Onboarding

const styles = StyleSheet.create({
    carousel: {
    flexGrow: 0,
    height: 150,
    },
    fries:{
        zIndex:0,
        width: 200,
        height:'100%',
        position:'absolute'

    },
})