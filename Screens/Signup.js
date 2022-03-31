import * as RootNavigation from '../RootNavigation.js';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

            
const Signup = ({navigation}) => {
    return(
    <View>
        <Text>Sign up Page</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('login')}>
            <Text>Sign Up</Text>
        </TouchableOpacity>
    </View>
)}

export default Signup