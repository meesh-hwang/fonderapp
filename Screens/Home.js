import React, { useState, useEffect, useRef } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Swipes from '../Components/Swipes'
import { useSelector } from "react-redux";

const Home = ({navigation}) => {

    const userId = useSelector((state) => state.user.user);
    const [meals, setMeals] = useState();
    const [userCuisines, getUserCuisines] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, checkLoaded] = useState(false);
    const swipesRef = useRef(null)

    useEffect(() =>{

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch("https://fonder.edwardlin.ca/api/v1/users/read.php?id="+userId, requestOptions)
      .then(response => response.json())
      .then(result => {
        getUserCuisines(result.users[0].cuisine_list)
      })
      .catch(error => console.log('error', error));
        

    fetch("https://fonder.edwardlin.ca/api/v1/meals/read.php", requestOptions)
    .then(response => response.json())
    .then(result =>{
        setMeals(result.meals);

        checkLoaded(true)
    })
    .catch(error => console.log('error', error));
    }, [])
    if(isLoaded){
      if(userCuisines.length > 0){
        var filteredMeals = meals.filter(item => userCuisines.includes(item.cuisine));

        function handleLike(mealId) {
            addUserMeals(userId, mealId);
            nextUser()
        }
    
        function handlePass() {
          nextUser()
        }
        function nextUser() {
            const nextIndex = filteredMeals.length - 1 === currentIndex ? 0 : currentIndex + 1
            setCurrentIndex(nextIndex)
        }
        // console.log(filteredMeals);
        return(
          <View style={StyleSheet.swipes}>
            {filteredMeals.length > 0 && filteredMeals.map(
              (u, i) =>
              currentIndex === i && (
              <Swipes
                key={i}
                ref={swipesRef}
                currentIndex={currentIndex}
                meals={filteredMeals}
                handleLike={handleLike}
                handlePass={handlePass}
              ></Swipes>
              )
            )}
          </View>
        )
      }
      else{
        return(
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}><Text style={{fontSize: 20}}>No Meals Found</Text><Text>Try adding more cuisines</Text></View>
        )
      }
    }
    else{
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}><Text>Loading</Text></View>
        )
    }
  }

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

function addUserMeals(userId, mealId){
    // console.log(userId + " likes " + mealId);
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