import * as RootNavigation from "../RootNavigation.js";
import React, { useState, useRef, useEffect } from "react";

import { View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import ListItems from "../Components/ListItems";

// Import Google Fonts
import { useFonts } from "expo-font";
import {
  Assistant_400Regular,
  Assistant_700Bold,
  Assistant_800ExtraBold,
  Assistant_600SemiBold,
} from "@expo-google-fonts/assistant";

const CuisinesSelection = ({ route, navigation }) => {
  const userID = useSelector((state) => state.user.user);
  const [cuisineList, setCuisineList] = useState([]);
  const [selCuisine, setSelCuisine] = useState([]);

  // Custom Google Fonts
  let [fontsLoaded] = useFonts({
    Assistant_400Regular,
    Assistant_700Bold,
    Assistant_600SemiBold,
    Assistant_800ExtraBold,
  });

  var getCuisineList = {
    method: "GET",
    redirect: "follow",
  };

  var getSelCuisineFunction = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    fetch("http://fonder.edwardlin.ca/api/v1/cuisines/read.php", getCuisineList)
      .then((response) => response.json())
      .then((result) => {
        var cuisineData = result.cuisines;
        setCuisineList(cuisineData);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://fonder.edwardlin.ca/api/v1/users/read.php?id=" + userID,
      getSelCuisineFunction
    )
      .then((response) => response.json())
      .then((result) => {
        setSelCuisine(result.users[0].cuisine_list);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const renderItem = ({ item }) => (
    <ListItems
      itemData={item}
      navigatorRef={navigation}
      user_id={userID}
      selectedCuisines={selCuisine}
    />
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cuisines</Text>
      <FlatList
        style={styles.cuisineList}
        data={cuisineList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CuisinesSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  heading: {
    fontFamily: "Assistant_700Bold",
    fontSize: 30,
    color: "#e66255",
    marginBottom: 20,
  },

  cuisineList: {
    // width: '100%',
    backgroundColor: "#fffbf3",
  },
});