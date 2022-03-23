
import {View, Text} from 'react-native';
import {Helmet} from "react-helmet";


export default function Home() {
    return(
    <View>
        <Text>Meesh is the boss</Text>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
        </Helmet>
    </View>
    );
}