import React from 'react'
import { useMediaQuery } from 'react-responsive'

import {View, Text} from 'react-native';
import {Helmet} from "react-helmet";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Partners from '../components/Partners';
import Footer from "../components/Footer";
import Reviews from '../components/Reviews';

import '../css/reset.css';
import '../css/main.css';
const Home = () =>{
     // media queries
     
     const isMobile = useMediaQuery({ query: '(max-width: 767px'})
     const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    return(
    <View>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
                <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Oranienbaum&family=Shrikhand&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/>
        </Helmet>
        
        {isMobile &&
        <div className='vhWrapper'></div>
        }
        {isTablet &&
        <div className='vhWrapper-tablet'></div>
        }
        <Banner />
        <Features />
        <Partners />
        <Reviews />
    </View>
    )
}
export default Home;
