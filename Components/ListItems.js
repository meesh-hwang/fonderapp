import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";

// Import Google Fonts
import { useFonts } from "expo-font";
import {
  Assistant_400Regular,
  Assistant_700Bold,
  Assistant_800ExtraBold,
  Assistant_600SemiBold,
} from "@expo-google-fonts/assistant";

export default function ListItems({
  itemData,
  navigatorRef,
  user_id,
  selectedCuisines,
}) {
    
  const Unchecked = () => {
    return <View style={styles.checkbox}></View>;
  };

  const Checked = () => {
    return (
      <View style={styles.checkbox}>
        <Icon
          name="checkmark-outline"
          size={20}
          style={{ fontWeight: "800" }}
        />
      </View>
    );
  };

  // Custom Google Fonts
  let [fontsLoaded] = useFonts({
    Assistant_400Regular,
    Assistant_700Bold,
    Assistant_600SemiBold,
    Assistant_800ExtraBold,
  });

  const [isSelected, setSelection] = useState(false);
  const [cuisine, setCuisine] = useState([]);

  if(selectedCuisines.length > 0) {
    useEffect(() => {
        if(selectedCuisines.includes(itemData.name)) {
            setSelection(true);
         }
      }, []);
  }

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => {
        if (!isSelected) {
          setSelection(true);
          addCuisine(user_id, itemData.id);
          setCuisine(itemData.name);
        } else {
          setSelection(false);
          removeCuisine(user_id, itemData.id);
        }
      }}
    >
      <View style={styles.checkboxContainer}>
        {!isSelected ? <Unchecked /> : <Checked />}
        <Text style={styles.name}>{itemData.name}</Text>
      </View>
      <Image source={{ uri: itemData.image_url }} style={styles.cuisineImage} />
    </TouchableOpacity>
  );
}

function addCuisine(user_id, item_id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // console.log(user_id + item_id);

  var raw = JSON.stringify({
    user_id: user_id,
    cuisine_id: item_id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://fonder.edwardlin.ca/api/v1/users/addcuisine.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

function removeCuisine(user_id, item_id) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    user_id: user_id,
    cuisine_id: item_id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://fonder.edwardlin.ca/api/v1/users/delcuisine.php",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#FFD88F",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },

  checkboxContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  checkmark: {
    fontSize: 20,
    fontFamily: "Assistant_700Bold",
    color: "green",
  },

  xcheckmark: {
    fontSize: 20,
    fontFamily: "Assistant_700Bold",
    color: "red",
  },

  name: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "Assistant_700Bold",
  },

  cuisineImage: {
    height: 75,
    width: "50%",
  },
  checkbox: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
});