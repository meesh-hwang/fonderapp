import React, { useState } from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/fonder-logo.svg';
import swipeImage from '../assets/img/Swipe.png';
import reserveTableImage from '../assets/img/Table.png';
import deliveredImage from '../assets/img/Door.png';
import '../css/reset.css'
import '../css/main.css'



const Features = () =>{


    return(
        <section className='features'>
            <div className='item'>
                <h4>Swipe for Food</h4>
                <div className="row">
                    <img className="left-col"src={swipeImage}/>
                    <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div className='item'>
                <h4>Reserve a Table</h4>
                <div className="row">
                    <img className="left-col"src={reserveTableImage}/>
                    <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div className='item'>
                <h4>Get it Delivered</h4>
                <div className="row">
                    <img className="left-col"src={deliveredImage}/>
                    <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
        </section>
    )
}
export default Features






