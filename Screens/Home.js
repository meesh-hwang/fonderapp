const userId = 1;
import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipes from '../Components/Swipes'
const Home = ({navigation}) => {
    const [meals, setMeals] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const swipesRef = useRef(null)

    useEffect(() =>{

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    fetch("https://fonder.edwardlin.ca/api/v1/meals/read.php", requestOptions)
    .then(response => response.json())
    .then(result =>{
        setMeals(result.meals);
    })
    .catch(error => console.log('error', error));
    }, [])


    function handleLike(mealId) {
        addUserMeals(mealId);
        nextUser()
    }
    
    function handlePass() {
       nextUser()
    }
    function nextUser() {
        // console.log(meals.length);
        const nextIndex = meals.length - 1 === currentIndex ? 0 : currentIndex + 1
        setCurrentIndex(nextIndex)
      }
    console.log(currentIndex);
    return(
    <View style={StyleSheet.swipes}>
            {meals.length > 1 && meals.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  meals={meals}
                  handleLike={handleLike}
                  handlePass={handlePass}
                ></Swipes>
              )
            )}
            
    </View>
)}

export default Home;

const styles = StyleSheet.create({
    swipes: {
        flex: 1,
        padding: 10,
        paddingTop: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
})

function addUserMeals(mealId){
    console.log(userId + " likes " + mealId);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "user_id": userId,
    "meal_id": mealId
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://fonder.edwardlin.ca/api/v1/users/addmeals.php", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
