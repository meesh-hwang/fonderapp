
import {View, Text} from 'react-native';
import {Helmet} from "react-helmet";

import Header from "../components/Header";

const Home = () =>{
    return(
        
    <div>
        <Header />
        <h1>Meesh is the boss</h1>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
        </Helmet>
    </div>
    )
}
export default Home;
