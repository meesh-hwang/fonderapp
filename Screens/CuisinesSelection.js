import * as RootNavigation from '../RootNavigation.js';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CuisinesSelection = ({navigation}) => {
    return(
    <View>
        <Text>User Selects Cuisines</Text>
        
            <TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
                <Text>Cuisine Selection</Text>
            </TouchableOpacity>
    </View>
)}

export default CuisinesSelection;