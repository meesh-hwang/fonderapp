import * as RootNavigation from '../RootNavigation.js';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserFavourites = ({navigation}) => {
    return(
    <View>
        <Text>User Favorites Page</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("MealInfo")}>
            <Text>Meal Info</Text>
        </TouchableOpacity>
    </View>
)}

export default UserFavourites;