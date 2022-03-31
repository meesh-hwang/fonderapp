import * as RootNavigation from '../RootNavigation.js';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    return(
    <View>
        <Text>Swiper Screen</Text>
        
            <TouchableOpacity onPress={()=>navigation.navigate("UserProfile")}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("UserFavourites")}>
                <Text>Favorites</Text>
            </TouchableOpacity>
    </View>
)}

export default Home;