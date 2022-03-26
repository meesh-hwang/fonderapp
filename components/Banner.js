import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/fonder-logo.svg';
import androidDownload from '../assets/img/android-download.svg';
import appleDownload from '../assets/img/apple-download.svg';
import bannerPeople from '../assets/img/hero-image.png';
import '../css/reset.css'
import '../css/main.css'



const Banner = (active) =>{


    return(
        <section className='banner'>
            <div className='left-col'>
                <h2>Can't decide what to eat? Just Swipe.</h2>
                <p>Have you ever felt frustrated and indecisive when deciding what to eat? Fonder can help with that. We feed your eyes first.</p>
                <div className='hero-download' > 
                    <a href="#"><img className="android-btn" src={androidDownload} /></a>
                    <a href="#"><img className='apple-btn' src={appleDownload} /></a>
                </div>
            </div>
            <img className='right-col home-banner-img' src={bannerPeople}/>
        </section>
    )
}
export default Banner






