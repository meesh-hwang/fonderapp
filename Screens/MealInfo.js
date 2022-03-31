import * as RootNavigation from '../RootNavigation.js';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealInfo = ({navigation}) => {
    return(
    <View>
        <Text>Meal Details Page</Text>
        
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
    </View>
)}

export default MealInfo;