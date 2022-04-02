import { useEffect } from "react";
import { Text, View } from "react-native";
import {
    useFonts,
    Assistant_400Regular,
    Assistant_800ExtraBold,
    Assistant_500Medium,
    Assistant_600SemiBold,
    Assistant_700Bold
} from "@expo-google-fonts/assistant";
import AppLoading from "expo-app-loading";
 
 function AppText(props) {
     
    const [fontsLoaded]= useFonts({
    Assistant_400Regular,
    Assistant_800ExtraBold,
    Assistant_500Medium,
    Assistant_600SemiBold,
    Assistant_700Bold
    })

useEffect(()=>{
    
})
    if (!fontsLoaded) {
        return (<AppLoading />);

    }

return(
    < Text {...props} style={{fontFamily:"Assistant_700Bold", color: '#E66255',fontSize:18}}>
        {props.children}
    </Text>
)

}
export default AppText