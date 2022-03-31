import {Image, View, Text} from 'react-native';

const Header = () => {
    return(
        <View>
            <Image source={require('../assets/img/logo.png')} />
        </View>
    );
}


export default Header;