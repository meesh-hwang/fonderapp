import React, {useState, useEffect, useCallback, useRef} from 'react';
import * as RootNavigation from '../RootNavigation.js';
import {View, Text, Image, StyleSheet, useWindowDimensions, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { GoogleMap, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import RNGooglePlaces from 'react-native-google-places-api';

import AppLoading from 'expo-app-loading';

import { Assistant_400Regular  , Assistant_700Bold , Assistant_800ExtraBold , Assistant_600SemiBold , Assistant_500Medium } from '@expo-google-fonts/assistant';





  const MealInfo = ({navigation, route}) => {
    const vw = useWindowDimensions().width;
    const [IsReady, SetIsReady] = useState(false);
    
    let [places, setPlaces] = useState([])

    let [fontsLoaded]= useFonts({
      Assistant_400Regular,
      Assistant_800ExtraBold,
      Assistant_500Medium,
      Assistant_600SemiBold,
      Assistant_700Bold
      });
    const { meal, img } = route.params;
    const {desc} = route.params;
    let mealString = toString(meal).replace(/\s/g, '+');

    const [placesMap, setPlacesMap] = 
      useState({
        lat: 49.246292, 
        long: -123.116226, 
        places: [], 
        isLoading: false, placeType: "restaurant"})


    
    let service;
    const libraries = ["places"];

    const center = {
      lat: 49.246292,
      lng: -123.116226
    };
    let [foodLocations, setLocation] = useState(foodLocations);


    const containerStyle = {
      width: '400px',
      height: '400px'
    };

    useEffect(()=>{
        fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=" + mealString + "&location=49.246292,-123.116226&radius=2500&region=ca&type=restaurant&key=AIzaSyCVLdzGxLDiTGmm3emqpW0CH6XbCsW32Ow")
            .then((response) => response.json())
            .then((result) => { setPlaces(result.results)

             
            }).catch((error) => console.log("error", error))
             
      },[])


    const Map = () => {
      const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyCVLdzGxLDiTGmm3emqpW0CH6XbCsW32Ow",
        libraries,
        region:'CA',
        id:'google-map-script'
      });

      


      const mapRef = React.useRef();
      const androidRef = React.useRef();

      const onMapLoad = React.useCallback(map => {
        mapRef.current = map;
      }, []);

      const panTo = () => {
        let map = mapRef.current;

        let request = {
          query: {meal},
          radius: "2500",
          type: ["restaurant"],
          fields:['name', 'geometry'],
          location: center
        };

        service = new google.maps.places.PlacesService(mapRef.current);
        service.nearbySearch(request, callback);

        setLocation(google.maps.LatLng());

        function callback(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              let place = results[i];
              new google.maps.Marker({
                position: place.geometry.location,
                map,
                label: place.name
              });

              foodLocations = results[0].geometry.location;

              mapRef.current.panTo(foodLocations);
              mapRef.current.setZoom(12);

            }

          }

          
        }


      };




      return(
        <View style={styles.mapContainer}>

          {isLoaded?
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onMapLoad}
            ref={mapRef}
          >
            

          <TouchableOpacity onPress={panTo}>
            <Text>Find nearby places that sell</Text>
          </TouchableOpacity>
          </GoogleMap> 
          
          : 
          
          <MapView style={{height:250, width:280}} provider={PROVIDER_GOOGLE} initialRegion={{
            latitude:49.246292,
            longitude:-123.116226,
            latitudeDelta:0.0622,
            longitudeDelta:0.0001
          }}>
            {places[0] != null && places.map((marker, index) => (
              <Marker
                  key = { index }
                  coordinate = {{ 
                        latitude: marker.geometry.location.lat,
                        longitude: marker.geometry.location.lng
                  }}
                  title = { marker.name }
                />
              ))
              }
          </MapView>
    }
          <RemoveBtn />
        </View>
      )
  };

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



    if(!fontsLoaded) {
    return(
      <AppLoading
        startAsync={fontsLoaded}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
    return (
    <View style={styles.container}>
        <FoodItem />
        <Map />
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
    map: {
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
    mapContainer: {
      display:'flex',
      flexDirection:'column',
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

    },
    map: {
      width: 400,
      height: 300
    },
})

export default MealInfo;