
import {View, Text} from 'react-native';
import {Helmet} from "react-helmet";
import {BrowserRouter} from "react-router-dom";


import Banner from "../components/Banner";
import Features from "../components/Features";
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';
import '../css/reset.css';
import '../css/main.css';
const Home = () =>{
    return(
    <View>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
                <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Oranienbaum&family=Shrikhand&display=swap" rel="stylesheet"/>
        </Helmet>
        <div className='vhWrapper'></div>
        <Banner />
        <Features />
        <Partners />
        <Reviews />
    </View>
    )
}
export default Home;
