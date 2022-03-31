import * as RootNavigation from '../RootNavigation.js';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Signup from './Signup.js';

const Login = ({navigation}) => {
    return(
    <View>
        <Text>Login Page</Text>
        
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Text>Login</Text>
            </TouchableOpacity>
    </View>
)}

export default Login;