import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const UserProfile = ({navigation}) => {
    return(
    <View>
        <Text>User Profile</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("CuisinesSelection")}>
            <Text>Cuisine Selection</Text>
        </TouchableOpacity>
    </View>
)}

export default UserProfile;